import { Specification, ResourceType, PropertyType } from '../CloudFormationSpecification';
import { generateResourceNamespace, getServiceName, getResourceTypeName } from './ResourceClassGenerator';

import { mkdirSync, readFile, appendFileSync, writeFileSync, accessSync, statSync, Stats, constants } from 'fs';

const defaultSrcDir:string = './src';
const defaultRootSpecDir:string = '/AWS';
const defaultSpecificationFile = `./resources/CloudFormationResourceSpecification-us-east-1.json`;

generate();

export async function generate(specificationFile = defaultSpecificationFile,srcDir = defaultSrcDir, rootSpecDir = defaultRootSpecDir){
	let spec:Specification = await loadSpecification(specificationFile);
	let generator = new SourceGenerator(srcDir,rootSpecDir,spec)
	generator.generate();
}


class ResourceNamespace {

	resouceTypeName:string;
	serviceName:string;


	constructor(public fullyQualifiedResourceName:string ){
		this.resouceTypeName = this.getResourceTypeName(fullyQualifiedResourceName);
		this.serviceName = this.getServiceName(fullyQualifiedResourceName);
	}

	private getServiceName(fullyQualifiedResourceName:string):string{
		if( fullyQualifiedResourceName.startsWith("Alexa") ){
			return this.getAlexaServiceName(fullyQualifiedResourceName);
		}
		let result = /AWS::([^:]*)::[\w]*/g.exec(fullyQualifiedResourceName);
		if(result && result.length>=2){
			return result[1];
		}
		throw new Error(`Unable to get Service Name, Invalid Fully Qualified Resource Name:${fullyQualifiedResourceName}`)
	}

	private getAlexaServiceName(fullyQualifiedResourceName:string){
		let result = /Alexa::([^:]*)::[\w]*/g.exec(fullyQualifiedResourceName);
		if(result && result.length>=2){
			return "Alexa"+result[1];
		}
		throw new Error(`Unable to get Service Name, Invalid Alexa Fully Qualified Resource Name:${fullyQualifiedResourceName}`)
	}

	private getResourceTypeName(fullyQualifiedResourceName:string):string{
		if( fullyQualifiedResourceName.startsWith("Alexa") ){
			return this.getAlexaResourceTypeName(fullyQualifiedResourceName);
		}
		let result = /AWS::[^:]*::([\w]*)/g.exec(fullyQualifiedResourceName);
		if(result && result.length>=2)
			return result[1];
		throw new Error(`Unable to get Resource Type Name, Invalid Fully Qualified Resource Name:${fullyQualifiedResourceName}`)
	}
	private getAlexaResourceTypeName(fullyQualifiedResourceName:string):string{
		let result = /Alexa::[^:]*::([\w]*)/g.exec(fullyQualifiedResourceName);
		if(result && result.length>=2)
			return "Alexa"+result[1];
		throw new Error(`Unable to get Resource Type Name, Invalid Alexa Fully Qualified Resource Name:${fullyQualifiedResourceName}`)
	}


}
export class SourceGenerator{
	serviceFolders:string[] = [];

	constructor(private srcDir:string, private rootSpecDir:string, private spec:Specification){}

	async generate(){
		this.serviceFolders = [];
		this.ensureDirectory(this.srcDir+this.rootSpecDir);
		let fullRootSpecDir = this.srcDir+this.rootSpecDir+'/';
		writeFileSync(fullRootSpecDir+"index.ts",`//AWS Exports\n`);
		let resourceTypeNames = Object.keys(this.spec.ResourceTypes);
		for( let resourceNamespace of resourceTypeNames){
			let namespace = new ResourceNamespace(resourceNamespace);
			this.createServiceDirectory(fullRootSpecDir,namespace.serviceName);
			this.createResourceSrcFile(this.spec.ResourceTypes[namespace.fullyQualifiedResourceName],namespace,fullRootSpecDir+namespace.serviceName,this.spec);
		}
	}

	private createServiceDirectory(parentDir:string,serviceName:string){
		if(this.serviceFolders.includes(serviceName))
			return;
		this.ensureDirectory(parentDir+serviceName);
		writeFileSync(parentDir+serviceName+"/index.ts",`//${serviceName} exports\n`);
		appendFileSync(parentDir+"index.ts",`import * as ${serviceName} from './${serviceName}';\nexport {${serviceName}};\n`);
		this.serviceFolders.push(serviceName);
	}
	private createResourceSrcFile(resourceType:ResourceType, namespace:ResourceNamespace, serviceDir:string, spec:Specification){
		let outfile = serviceDir+'/'+namespace.resouceTypeName+'.ts';
		writeFileSync(outfile,generateResourceNamespace(namespace.fullyQualifiedResourceName,spec));
		appendFileSync(serviceDir+'/index.ts',`export * from './${namespace.resouceTypeName}';\n`)
	}

	private ensureDirectory(dir:string){
		try{
			try{
				//checks if the directory exists, throws error otherwise
				let rootStat:Stats = statSync(dir);
			} catch(existError){
				//if the directory doesn't exist, try to create it
				mkdirSync(dir);
			}
			//checks for write access on directory, throws error otherwise
			accessSync(dir, constants.W_OK);
		} catch(err){
			console.log(JSON.stringify(err,null,2));
			throw("Error while creating source directory:"+dir);
		}
	}
}

export function loadSpecification(filename:string):Promise<Specification> {
	return new Promise<Specification>((resolve,reject)=>{
		readFile(filename,(error,data)=>{
			if(error){
				reject(error);
			}
			try{
				let specData = JSON.parse(data.toString('utf8'));
				//loadPropertyTypeMap(specData.PropertyTypes);
				let spec:Specification = {
					PropertyTypes:loadPropertyTypeMap(specData.PropertyTypes),
					ResourceTypes:specData.ResourceTypes
				}
				console.log("Resolving");
				resolve(spec);
			} catch(error){
				console.log('Rejected');
				reject(error);
			}
		});
	})
}


function loadPropertyTypeMap(propertyTypeData:any):{[Name:string]:PropertyType}{
	console.log("loadPropertyTypeMap");
	let propTypeNames:string[] = Object.keys(propertyTypeData);
	let propertyTypeMap:{[Name:string]:PropertyType} = {};
	propTypeNames.forEach(name=>{
		let ptData = propertyTypeData[name];
		let propertyType:PropertyType = {
			Documentation:ptData.Documentation,
			Properties:ptData.Properties
		}
		propertyTypeMap[name] = propertyType;
	})

	return propertyTypeMap;
}
