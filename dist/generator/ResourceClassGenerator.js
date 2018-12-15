"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificationNamespace_1 = require("./SpecificationNamespace");
function generateResourceSourceCode(namespace, spec) {
    var output = 'import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from \'../../AWSResource\';\n' +
        'import { CloudFormationFunctionResult } from \'../../CloudFormationFunctionResult\'\n\n';
    var resourceType = spec.ResourceTypes[namespace.fullyQualifiedNamespace];
    var propertyList = findNamespacePropertyTypes(namespace, spec);
    output += generateResourceClass(namespace, spec) + "\n";
    output += generateResourceInterface(resourceType, namespace.getResource()) + "\n";
    propertyList.forEach(function (property) {
        output += generatePropertyTypeInterface(property.propertyType, property.namespace) + "\n";
    });
    return output;
}
exports.generateResourceSourceCode = generateResourceSourceCode;
function generateResourceClass(resourceNamespace, spec) {
    var resourceType = spec.ResourceTypes[resourceNamespace.fullyQualifiedNamespace];
    var className = resourceNamespace.getResource();
    var classOut = "export class " + className + " extends AWSResource<" + className + "_ResourceProperties> {\n" +
        ("\tconstructor(name:string,properties:" + className + "_ResourceProperties){\n") +
        ("\t\tsuper(name,properties,\"" + resourceNamespace.fullyQualifiedNamespace + "\");\n") +
        "\t}\n" +
        '}\n';
    return classOut;
}
exports.generateResourceClass = generateResourceClass;
//Gets all of the propertyTypes related to a given Resource
function findNamespacePropertyTypes(resourcenNamespace, spec) {
    var propertyTypeNames = Object.keys(spec.PropertyTypes);
    var namespacePropertyTypeNames = propertyTypeNames.filter(function (name) { return name.startsWith(resourcenNamespace.fullyQualifiedNamespace + '.'); });
    return namespacePropertyTypeNames.map(function (fullyQualifiedPropertyName) {
        var propertyNamespace = new SpecificationNamespace_1.SpecificationNamespace(fullyQualifiedPropertyName);
        return {
            namespace: propertyNamespace,
            propertyType: spec.PropertyTypes[fullyQualifiedPropertyName]
        };
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
function generateResourceInterface(resourceType, resourceName) {
    var interfaceDeclaration = "export interface " + resourceName + "_ResourceProperties extends AWSResourceProperties {\n" + generateResourceDeclarationList(resourceType, resourceName) + "\n}";
    return interfaceDeclaration;
}
exports.generateResourceInterface = generateResourceInterface;
function generateResourceDeclarationList(resourceType, resourceTypeName) {
    var propertyNames = Object.keys(resourceType.Properties);
    var propertyDeclarations = '';
    propertyNames.forEach(function (propertyName) {
        propertyDeclarations += '\t' + generatePropertyDeclaration(resourceType.Properties[propertyName], propertyName, resourceTypeName) + '\n';
    });
    return propertyDeclarations;
}
function generatePropertyTypeInterface(propertyType, namespace) {
    var propertyDeclarations = generatePropertyTypeDeclarationList(propertyType, namespace.getResource());
    return "export interface " + namespace.getResource() + "_" + namespace.getProperty() + " {\n" + propertyDeclarations + "\n}";
}
exports.generatePropertyTypeInterface = generatePropertyTypeInterface;
function generatePropertyTypeDeclarationList(propertyType, resourceTypeName) {
    var propertyNames = Object.keys(propertyType.Properties);
    var propertyDeclarations = '';
    propertyNames.forEach(function (propertyName) {
        propertyDeclarations += '\t' + generatePropertyDeclaration(propertyType.Properties[propertyName], propertyName, resourceTypeName) + '\n';
    });
    return propertyDeclarations;
}
function generatePropertyDeclaration(property, propertyName, resourceTypeName) {
    return "" + propertyName + (property.Required ? '' : '?') + ":" + getPropertyType(property, resourceTypeName) + ";";
}
function getPropertyType(property, resourceTypeName) {
    if (property.PrimitiveType) {
        return getPrimitiveType(property.PrimitiveType);
    }
    else if (property.Type && property.Type != "List" && property.Type != 'Map') {
        return getFullItemType(property.Type, resourceTypeName);
    }
    else if (property.Type == "List") {
        if (property.ItemType) {
            return getFullItemType(property.ItemType, resourceTypeName) + "[]";
        }
        else {
            if (property.PrimitiveItemType == "String") {
                return 'AWSStringListProperty';
            }
            else {
                return getPrimitiveType(property.PrimitiveItemType) + '[]';
            }
        }
    }
    else {
        if (property.ItemType) {
            return "Map<string," + getFullItemType(property.ItemType, resourceTypeName) + ">";
        }
        else {
            return 'Map<string,' + getPrimitiveType(property.PrimitiveItemType) + '>';
        }
    }
}
function getFullItemType(itemType, resourceTypeName) {
    if (itemType == "Tag")
        return itemType;
    return resourceTypeName + "_" + itemType;
}
function getPrimitiveType(primitiveType) {
    if (primitiveType == undefined) {
        console.log("Undefined Primitive type defaulting to string");
        return 'AWSStringProperty';
    }
    switch (primitiveType) {
        case "String": return 'AWSStringProperty';
        case "Boolean": return 'boolean';
        case "Timestamp": return 'Date';
        case "Json": return 'any';
        default: return 'number';
    }
}
//# sourceMappingURL=ResourceClassGenerator.js.map