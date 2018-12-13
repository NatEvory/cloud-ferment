import { ResourceType, Property, PropertyType, Attribute, Specification} from '../CloudFormationSpecification';



export function generateResourceClass(resourceTypeName:string,namespace:string, spec:Specification){
	let rType:ResourceType = spec.ResourceTypes[resourceTypeName];

	let className = resourceTypeName;
	let classOut =
	`export class ${className} extends AWSResource<${className}_ResourceProperties> {\n`+

		`\tconstructor(name:string,properties:${className}_ResourceProperties){\n`+
			`\t\tsuper(name,properties,"${namespace}");\n`+
		`\t}\n`+
	'}\n'
	return classOut;
}

export function generateResourceNamespace( namespace:string, spec:Specification ){
	let output:string = 'import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from \'../../AWSResource\';\n'+
						'import { CloudFormationFunctionResult } from \'../../CloudFormationFunction\'\n\n';
	let resourceType = spec.ResourceTypes[namespace];
	let propertyTypes = findNamespacePropertyTypes(namespace,spec);

	output += `${generateResourceClass(getResourceTypeName(namespace),namespace,spec)}\n`

	output+= `${generateResourceInterface(resourceType,getResourceTypeName(namespace))}\n`

	propertyTypes.forEach(propertyType=>{
		output+=`${generatePropertyTypeInterface(propertyType.propertyType,propertyType.propertyTypeName,propertyType.resourceTypeName,namespace)}\n`
	})
	return output;
}

function findNamespacePropertyTypes( namespace:string, spec:Specification ){
	let propertyTypeNames:string[] = Object.keys(spec.PropertyTypes);
	let namespacePropertyTypeNames = propertyTypeNames.filter(name=>name.startsWith(namespace+'.'));
	return namespacePropertyTypeNames.map(propertyTypeName=>{
		return {
			resourceTypeName:getResourceTypeName(propertyTypeName),
			propertyTypeName:getPropertyTypeName(propertyTypeName),
			propertyType:spec.PropertyTypes[propertyTypeName]
		}
	});
}

function findNamespaceResourceTypes( namespace:string, spec:Specification ){
	let resourceTypeNames:string[] = Object.keys(spec.ResourceTypes);
	let namespaceResourceTypeNames = resourceTypeNames.filter(name=>name.startsWith(`AWS::${namespace}`));
	return namespaceResourceTypeNames.map(resourceTypeName=>{
		return {
			resourceTypeName:getResourceTypeName(resourceTypeName),
			resourceType:spec.ResourceTypes[resourceTypeName]
		}
	});
}

function getPropertyTypeName(propertyTypeName:string){
	let result = /AWS::[^:]*::[^.]*.(\w*)/g.exec(propertyTypeName);
	if(result && result.length>=2)
		return result[1];
	return '';
}

function getResourceTypeName(typeName:string){
	let result = /AWS::[^:]*::([\w]*)/g.exec(typeName);
	if(result && result.length>=2)
		return result[1];
	return '';
}


export function generateResourceInterface( resourceType:ResourceType, resourceTypeName:string ){
	let interfaceDeclaration =`export interface ${resourceTypeName}_ResourceProperties extends AWSResourceProperties {\n${generateResourceDeclarationList(resourceType,resourceTypeName)}\n}`;
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

export function generatePropertyTypeInterface( propertyType:PropertyType, propertyTypeName:string, resourceTypeName:string, namespace:string ){
	let propertyDeclarations = generatePropertyTypeDeclarationList(propertyType,resourceTypeName);
	return `export interface ${resourceTypeName}_${propertyTypeName} {\n${propertyDeclarations}\n}`
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
			return `Map<string,${getFullItemType(property.ItemType,resourceTypeName)}>`;
		} else {
			return 'Map<string,'+getPrimitiveType(property.PrimitiveItemType)+'>';
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
