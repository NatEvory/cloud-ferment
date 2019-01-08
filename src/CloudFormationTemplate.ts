import { AWSResource, AWSStringProperty, AWSStringListProperty } from './AWSResource';

export class CloudFormationTemplate{
	private resources:AWSResource<any>[] = [];
	private mappings:TemplateMapping[] = [];
	private parameters:TemplateParameter[] = [];
	private outputs:TemplateOutput[] = [];

	constructor(public description:string){

	}
	addResource(resource:AWSResource<any>){
		this.resources.push(resource);
	}
	addMapping(mapping:TemplateMapping){
		this.mappings.push(mapping);
	}

	addParameter(parameter:TemplateParameter){
		this.parameters.push(parameter);
	}

	addOutput(output:TemplateOutput){
		this.outputs.push(output);
	}

	templateOutput():any{
		return {
			"Description":this.description,
			"Parameters":this.parameterOutput(),
			"Mappings":this.mappingOutput(),
			"Resources":this.resourceOutput(),
			"Outputs":this.outputOutput()
		}
	}
	private resourceOutput():any{
		let output:any = {};
		this.resources.forEach((resource):any=>{
			output[resource.name] = {
				"Type":resource.getTypeName(),
				"Properties":resource.getResourceProperties()
			}
			let dependsOn = resource.getDependencies();
			if(dependsOn && dependsOn.length>0){
				output.DependsOn = dependsOn;
			}
		})
		return output;
	}
	private mappingOutput():any{
		let output:any = {};
		this.mappings.forEach((mapping):any=>{
			output[mapping.Name] = mapping.Map;
		})
		return output;
	}
	private parameterOutput():any{
		let output:any = {};
		this.parameters.forEach((param):any=>{
			let copy = Object.assign({},param);
			delete copy.Name;
			output[param.Name] = copy;
		})
		return output;
	}

	private outputOutput():any{
		let output:any = {};
		this.outputs.forEach((out):any=>{
			let copy:any = Object.assign({},out);
			delete copy.Name;
			if(copy.ExportName){
				delete copy.ExportName;
				copy.Export = {"Name":out.ExportName};
			}
			output[out.Name] = copy;
		})
		return output;
	}

}



export interface TemplateOutput {
	Name:string;
	Description:AWSStringProperty;
	Value:AWSStringProperty;
	ExportName?:AWSStringProperty;
}

export interface TemplateMapping {
	Name:string;
	Map:{ [key:string]: { [key:string]:AWSStringProperty } };

}

export interface TemplateParameter {
	Name:string;
	Type:AWSStringProperty;
	AllowedPattern?:AWSStringProperty;
	AllowedValues?:AWSStringListProperty;
	ConstraintDescription?:AWSStringProperty;
	Default?:any;
	Description?:AWSStringProperty;
	MaxLength?:number;
	MaxValue?:number;
	MinLength?:number;
	MinValue?:number;
	NoEcho?:boolean;
}
