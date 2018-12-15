"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNamespaceParts(namespace) {
    var result = /([^:]*)::([^:]*)::([^.]*)\.?(\w*)?/g.exec(namespace);
    console.log(result);
    if (result.length < 2)
        return [];
    else
        return result.filter(function (value, index) { return index != 0 && value; });
}
exports.getNamespaceParts = getNamespaceParts;
function getNamespaceService(namespace) {
}
exports.getNamespaceService = getNamespaceService;
function getNamespaceResource(namespace) {
}
exports.getNamespaceResource = getNamespaceResource;
function getNamespaceProperty(namespace) {
}
exports.getNamespaceProperty = getNamespaceProperty;
function getResourceTypeName(fullyQualifiedResourceName) {
    if (fullyQualifiedResourceName.startsWith("Alexa")) {
        return getAlexaResourceTypeName(fullyQualifiedResourceName);
    }
    var result = /AWS::[^:]*::[^.]*.(\w*)/g.exec(fullyQualifiedResourceName);
    if (result && result.length >= 2)
        return result[1];
    return '';
}
exports.getResourceTypeName = getResourceTypeName;
function getAlexaResourceTypeName(fullyQualifiedResourceName) {
    var result = /Alexa::[^:]*::([\w]*)/g.exec(fullyQualifiedResourceName);
    if (result && result.length >= 2)
        return result[1];
    throw new Error("Unable to get Resource Type Name, Invalid Alexa Fully Qualified Resource Name:" + fullyQualifiedResourceName);
}
function getServiceName(fullyQualifiedResourceName) {
    if (fullyQualifiedResourceName.startsWith("Alexa")) {
        return getAlexaServiceName(fullyQualifiedResourceName);
    }
    var result = /AWS::[^:]*::([\w]*)/g.exec(fullyQualifiedResourceName);
    if (result && result.length >= 2)
        return result[1];
    return '';
}
exports.getServiceName = getServiceName;
function getAlexaServiceName(fullyQualifiedResourceName) {
    var result = /Alexa::([^:]*)::[\w]*/g.exec(fullyQualifiedResourceName);
    if (result && result.length >= 2) {
        return "Alexa" + result[1];
    }
    throw new Error("Unable to get Service Name, Invalid Alexa Fully Qualified Resource Name:" + fullyQualifiedResourceName);
}
function getPropertyTypeName(propertyTypeName) {
    if (propertyTypeName.startsWith("Alexa")) {
        return getAlexaPropertyTypeName(propertyTypeName);
    }
    var result = /AWS::[^:]*::[^.]*.(\w*)/g.exec(propertyTypeName);
    if (result && result.length >= 2)
        return result[1];
    return '';
}
function getAlexaPropertyTypeName(propertyTypeName) {
    var result = /AWS::[^:]*::[^.]*.(\w*)/g.exec(propertyTypeName);
    if (result && result.length >= 2)
        return result[1];
    return '';
}
//# sourceMappingURL=ParseNamespace.js.map