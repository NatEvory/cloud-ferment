"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CloudFormationTemplate = /** @class */ (function () {
    function CloudFormationTemplate(description) {
        this.description = description;
        this.resources = [];
        this.mappings = [];
        this.parameters = [];
        this.outputs = [];
    }
    CloudFormationTemplate.prototype.addResource = function (resource) {
        this.resources.push(resource);
    };
    CloudFormationTemplate.prototype.addMapping = function (mapping) {
        this.mappings.push(mapping);
    };
    CloudFormationTemplate.prototype.addParameter = function (parameter) {
        this.parameters.push(parameter);
    };
    CloudFormationTemplate.prototype.addOutput = function (output) {
        this.outputs.push(output);
    };
    CloudFormationTemplate.prototype.templateOutput = function () {
        return {
            "Description": this.description,
            "Parameters": this.parameterOutput(),
            "Mappings": this.mappingOutput(),
            "Resources": this.resourceOutput(),
            "Outputs": this.outputOutput()
        };
    };
    CloudFormationTemplate.prototype.resourceOutput = function () {
        var output = {};
        this.resources.forEach(function (resource) {
            output[resource.name] = {
                "Type": resource.getTypeName(),
                "Properties": resource.getResourceProperties()
            };
            var dependsOn = resource.getDependencies();
            if (dependsOn && dependsOn.length > 0) {
                output.DependsOn = dependsOn;
            }
        });
        return output;
    };
    CloudFormationTemplate.prototype.mappingOutput = function () {
        var output = {};
        this.mappings.forEach(function (mapping) {
            output[mapping.Name] = mapping.Map;
        });
        return output;
    };
    CloudFormationTemplate.prototype.parameterOutput = function () {
        var output = {};
        this.parameters.forEach(function (param) {
            var copy = Object.assign({}, param);
            delete copy.Name;
            output[param.Name] = copy;
        });
        return output;
    };
    CloudFormationTemplate.prototype.outputOutput = function () {
        var output = {};
        this.outputs.forEach(function (out) {
            var copy = Object.assign({}, out);
            delete copy.Name;
            if (copy.ExportName) {
                delete copy.ExportName;
                copy.Export = { "Name": out.ExportName };
            }
            output[out.Name] = copy;
        });
        return output;
    };
    return CloudFormationTemplate;
}());
exports.CloudFormationTemplate = CloudFormationTemplate;
//# sourceMappingURL=CloudFormationTemplate.js.map