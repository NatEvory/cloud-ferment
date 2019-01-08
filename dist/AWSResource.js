"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWSResource = /** @class */ (function () {
    function AWSResource(name, resourceProperties, typeName, dependsOn) {
        this.name = name;
        this.resourceProperties = resourceProperties;
        this.typeName = typeName;
        this.dependsOn = dependsOn;
    }
    AWSResource.prototype.getResourceProperties = function () {
        return this.resourceProperties;
    };
    AWSResource.prototype.getTypeName = function () {
        return this.typeName;
    };
    AWSResource.prototype.getDependencies = function () {
        return this.dependsOn;
    };
    return AWSResource;
}());
exports.AWSResource = AWSResource;
//# sourceMappingURL=AWSResource.js.map