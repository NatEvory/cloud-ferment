"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateResourceClass(resourceTypeName, namespace, spec) {
    var rType = spec.ResourceTypes[resourceTypeName];
    var className = resourceTypeName;
    var classOut = "export class " + className + " extends AWSResource<" + className + "_ResourceProperties> {\n" +
        ("\tconstructor(name:string,properties:" + className + "_ResourceProperties){\n") +
        ("\t\tsuper(name,properties,\"" + namespace + "\");\n") +
        "\t}\n" +
        '}\n';
    return classOut;
}
exports.generateResourceClass = generateResourceClass;
function generateResourceNamespace(namespace, spec) {
    var output = 'import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from \'../../AWSResource\';\n' +
        'import { CloudFormationFunctionResult } from \'../../CloudFormationFunction\'\n\n';
    var resourceType = spec.ResourceTypes[namespace];
    var propertyTypes = findNamespacePropertyTypes(namespace, spec);
    output += generateResourceClass(getResourceTypeName(namespace), namespace, spec) + "\n";
    output += generateResourceInterface(resourceType, getResourceTypeName(namespace)) + "\n";
    propertyTypes.forEach(function (propertyType) {
        output += generatePropertyTypeInterface(propertyType.propertyType, propertyType.propertyTypeName, propertyType.resourceTypeName, namespace) + "\n";
    });
    return output;
}
exports.generateResourceNamespace = generateResourceNamespace;
function findNamespacePropertyTypes(namespace, spec) {
    var propertyTypeNames = Object.keys(spec.PropertyTypes);
    var namespacePropertyTypeNames = propertyTypeNames.filter(function (name) { return name.startsWith(namespace + '.'); });
    return namespacePropertyTypeNames.map(function (propertyTypeName) {
        return {
            resourceTypeName: getResourceTypeName(propertyTypeName),
            propertyTypeName: getPropertyTypeName(propertyTypeName),
            propertyType: spec.PropertyTypes[propertyTypeName]
        };
    });
}
function findNamespaceResourceTypes(namespace, spec) {
    var resourceTypeNames = Object.keys(spec.ResourceTypes);
    var namespaceResourceTypeNames = resourceTypeNames.filter(function (name) { return name.startsWith("AWS::" + namespace); });
    return namespaceResourceTypeNames.map(function (resourceTypeName) {
        return {
            resourceTypeName: getResourceTypeName(resourceTypeName),
            resourceType: spec.ResourceTypes[resourceTypeName]
        };
    });
}
function getPropertyTypeName(propertyTypeName) {
    var result = /AWS::[^:]*::[^.]*.(\w*)/g.exec(propertyTypeName);
    if (result && result.length >= 2)
        return result[1];
    return '';
}
function getResourceTypeName(typeName) {
    var result = /AWS::[^:]*::([\w]*)/g.exec(typeName);
    if (result && result.length >= 2)
        return result[1];
    return '';
}
function generateResourceInterface(resourceType, resourceTypeName) {
    var interfaceDeclaration = "export interface " + resourceTypeName + "_ResourceProperties extends AWSResourceProperties {\n" + generateResourceDeclarationList(resourceType, resourceTypeName) + "\n}";
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
function generatePropertyTypeInterface(propertyType, propertyTypeName, resourceTypeName, namespace) {
    var propertyDeclarations = generatePropertyTypeDeclarationList(propertyType, resourceTypeName);
    return "export interface " + resourceTypeName + "_" + propertyTypeName + " {\n" + propertyDeclarations + "\n}";
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