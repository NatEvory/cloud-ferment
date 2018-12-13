"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWSResource = /** @class */ (function () {
    function AWSResource(name, resourceProperties, typeName) {
        this.name = name;
        this.resourceProperties = resourceProperties;
        this.typeName = typeName;
    }
    AWSResource.prototype.getResourceProperties = function () {
        return this.resourceProperties;
    };
    AWSResource.prototype.getTypeName = function () {
        return this.typeName;
    };
    return AWSResource;
}());
exports.AWSResource = AWSResource;
//# sourceMappingURL=AWSResource.js.map