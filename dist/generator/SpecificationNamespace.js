"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificationNamespace = /** @class */ (function () {
    function SpecificationNamespace(fullyQualifiedNamespace) {
        this.fullyQualifiedNamespace = fullyQualifiedNamespace;
        var namespaceParts = this.getNamespaceParts(fullyQualifiedNamespace);
        if (namespaceParts.length < 3) {
            throw new Error(fullyQualifiedNamespace + " is not a valid fully qualified specification namespace");
        }
        this.namespaceParts = namespaceParts;
    }
    SpecificationNamespace.prototype.getRoot = function () {
        return this.namespaceParts[0];
    };
    SpecificationNamespace.prototype.getService = function () {
        return this.namespaceParts[1];
    };
    SpecificationNamespace.prototype.getResource = function () {
        return this.namespaceParts[2];
    };
    SpecificationNamespace.prototype.getProperty = function () {
        if (this.namespaceParts.length < 4)
            return undefined;
        else
            return this.namespaceParts[3];
    };
    SpecificationNamespace.prototype.getNamespaceParts = function (fullyQualifiedNamespace) {
        var result = /([^:]*)::([^:]*)::([^.]*)\.?(\w*)?/g.exec(fullyQualifiedNamespace);
        if (result.length < 2)
            return [];
        else
            return result.filter(function (value, index) { return index != 0 && value; });
    };
    return SpecificationNamespace;
}());
exports.SpecificationNamespace = SpecificationNamespace;
//# sourceMappingURL=SpecificationNamespace.js.map