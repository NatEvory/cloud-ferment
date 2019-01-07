import { ResourceType, Property, PropertyType, Attribute, Specification} from '../CloudFormationSpecification';
import { SpecificationNamespace } from './SpecificationNamespace';



export function generateResourceSourceCode( namespace:SpecificationNamespace, spec:Specification ){
	let output:string = 'import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from \'../../AWSResource\';\n'+
						'import { CloudFormationFunctionResult } from \'../../CloudFormationFunctionResult\'\n\n';
	let resourceType = spec.ResourceTypes[namespace.fullyQualifiedNamespace];
	let propertyList = findNamespacePropertyTypes(namespace,spec);

	output += `${generateResourceClass(namespace,spec)}\n`

	output+= `${generateResourceInterface(resourceType,namespace.getResource())}\n`

	propertyList.forEach(property=>{
		output+=`${generatePropertyTypeInterface(property.propertyType,property.namespace)}\n`
	})
	return output;
}

export function generateResourceClass(resourceNamespace:SpecificationNamespace, spec:Specification){
	let resourceType:ResourceType = spec.ResourceTypes[resourceNamespace.fullyQualifiedNamespace];

	let className = resourceNamespace.getResource();
	let classOut =
	`export class ${className} extends AWSResource<${className}_ResourceProperties> {\n`+

		`\tconstructor(name:string,properties:${className}_ResourceProperties){\n`+
			`\t\tsuper(name,properties,"${resourceNamespace.fullyQualifiedNamespace}");\n`+
		`\t}\n`+
	'}\n'
	return classOut;
}


//Gets all of the propertyTypes related to a given Resource
function findNamespacePropertyTypes( resourcenNamespace:SpecificationNamespace, spec:Specification ){
	let propertyTypeNames:string[] = Object.keys(spec.PropertyTypes);
	let namespacePropertyTypeNames = propertyTypeNames.filter(name=>name.startsWith(resourcenNamespace.fullyQualifiedNamespace+'.'));
	return namespacePropertyTypeNames.map(fullyQualifiedPropertyName=>{
		let propertyNamespace:SpecificationNamespace = new SpecificationNamespace(fullyQualifiedPropertyName);
		return {
			namespace:propertyNamespace,
			propertyType:spec.PropertyTypes[fullyQualifiedPropertyName]
		}
	});
}

// function findNamespaceResourceTypes( resourceNamespace:SpecificationNamespace, spec:Specification ){
// 	let resourceTypeNames:string[] = Object.keys(spec.ResourceTypes);
// 	let namespaceResourceTypeNames = resourceTypeNames.filter(name=>name.startsWith(`${resourceNamespace.getRoot}::${resourceNamespace.getService()}`));
// 	return namespaceResourceTypeNames.map(resourceTypeName=>{
// 		return {
// 			namespace:resourceNamespace,
// 			resourceType:spec.ResourceTypes[resourceTypeName]
// 		}
// 	});
// }


export function generateResourceInterface( resourceType:ResourceType, resourceName:string ){
	let interfaceDeclaration =`export interface ${resourceName}_ResourceProperties extends AWSResourceProperties {\n${generateResourceDeclarationList(resourceType,resourceName)}\n}`;
	return interfaceDeclaration;
}

function generateResourceDeclarationList( resourceType:ResourceType, resourceTypeName:string ){
	let propertyNames = Object.keys(resourceType.Properties);
	let propertyDeclarations = '';
	propertyNames.forEach((propertyName)=>{
		propertyDeclarations += '\t'+generatePropertyDeclaration(resourceType.Properties[propertyName],propertyName,resourceTypeName)+'\n';
	})
	return propertyDeclarations;
}

export function generatePropertyTypeInterface( propertyType:PropertyType,  namespace:SpecificationNamespace ){
	let propertyDeclarations = generatePropertyTypeDeclarationList(propertyType,namespace.getResource());
	return `export interface ${namespace.getResource()}_${namespace.getProperty()} {\n${propertyDeclarations}\n}`
}

function generatePropertyTypeDeclarationList( propertyType:PropertyType , resourceTypeName:string){
	let propertyNames = Object.keys(propertyType.Properties);
	let propertyDeclarations = '';
	propertyNames.forEach((propertyName)=>{
		propertyDeclarations += '\t'+generatePropertyDeclaration(propertyType.Properties[propertyName],propertyName, resourceTypeName)+'\n';
	})
	return propertyDeclarations;
}


function generatePropertyDeclaration(property:Property, propertyName:string,resourceTypeName:string){
	return `${propertyName}${property.Required?'':'?'}:${getPropertyType(property,resourceTypeName)};`;
}

function getPropertyType(property:Property,resourceTypeName:string){
	if(property.PrimitiveType){
		return getPrimitiveType(property.PrimitiveType);
	} else if(property.Type && property.Type != "List" && property.Type != 'Map') {
		return getFullItemType(property.Type,resourceTypeName);
	} else if (property.Type =="List"){
		if(property.ItemType){
			return `${getFullItemType(property.ItemType,resourceTypeName)}[]`;
		} else {
			if(property.PrimitiveItemType == "String"){
				return 'AWSStringListProperty';
			} else {
				return getPrimitiveType(property.PrimitiveItemType)+'[]';
			}
		}
	} else {
		if(property.ItemType){
			return `{[key:string]:${getFullItemType(property.ItemType,resourceTypeName)}}`;
		} else {
			return `{[key:string]:${getPrimitiveType(property.PrimitiveItemType)}}`;
		}
	}
}

function getFullItemType( itemType:string, resourceTypeName:string){
	if(itemType == "Tag")
		return itemType;
	return `${resourceTypeName}_${itemType}`;
}

function getPrimitiveType(primitiveType:string|undefined){
	if(primitiveType == undefined){
		console.log("Undefined Primitive type defaulting to string");
		return 'AWSStringProperty';
	}
	switch(primitiveType){
		case "String" : return 'AWSStringProperty';
		case "Boolean" : return 'boolean';
		case "Timestamp" : return 'Date';
		case "Json" : return 'any';
		default : return 'number'
	}
}
