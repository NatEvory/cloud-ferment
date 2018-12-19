"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Ref(resource) {
    var resourceName;
    if (typeof resource == 'string') {
        resourceName = resource;
    }
    else {
        resourceName = resource.name;
    }
    return {
        "Ref": resourceName
    };
}
exports.Ref = Ref;
function GetAtt(resource, attribute) {
    var resourceName;
    if (typeof resource == 'string') {
        resourceName = resource;
    }
    else {
        resourceName = resource.name;
    }
    return {
        "Fn::GetAtt": [resourceName, attribute]
    };
}
exports.GetAtt = GetAtt;
function Join(delimiter, parts) {
    return {
        "Fn::Join": [delimiter, parts]
    };
}
exports.Join = Join;
function ImportValue(name) {
    return {
        "Fn::ImportValue": name
    };
}
exports.ImportValue = ImportValue;
function Split(delimiter, value) {
    return {
        "Fn::Split": [delimiter, value]
    };
}
exports.Split = Split;
function FindInMap(mapName, topKey, key) {
    return {
        "Fn::FindInMap": [mapName, topKey, key]
    };
}
exports.FindInMap = FindInMap;
//# sourceMappingURL=CloudFormationFunction.js.map