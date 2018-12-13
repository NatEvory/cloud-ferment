"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResourceClassGenerator_1 = require("./ResourceClassGenerator");
var fs_1 = require("fs");
var defaultSrcDir = './src';
var defaultRootSpecDir = '/AWS';
var defaultSpecificationFile = "./resources/CloudFormationResourceSpecification-us-east-1.json";
generate();
function generate(specificationFile, srcDir, rootSpecDir) {
    if (specificationFile === void 0) { specificationFile = defaultSpecificationFile; }
    if (srcDir === void 0) { srcDir = defaultSrcDir; }
    if (rootSpecDir === void 0) { rootSpecDir = defaultRootSpecDir; }
    return __awaiter(this, void 0, void 0, function () {
        var spec, generator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadSpecification(specificationFile)];
                case 1:
                    spec = _a.sent();
                    generator = new SourceGenerator(srcDir, rootSpecDir, spec);
                    generator.generate();
                    return [2 /*return*/];
            }
        });
    });
}
exports.generate = generate;
var ResourceNamespace = /** @class */ (function () {
    function ResourceNamespace(fullyQualifiedResourceName) {
        this.fullyQualifiedResourceName = fullyQualifiedResourceName;
        this.resouceTypeName = this.getResourceTypeName(fullyQualifiedResourceName);
        this.serviceName = this.getServiceName(fullyQualifiedResourceName);
    }
    ResourceNamespace.prototype.getServiceName = function (fullyQualifiedResourceName) {
        if (fullyQualifiedResourceName.startsWith("Alexa")) {
            return this.getAlexaServiceName(fullyQualifiedResourceName);
        }
        var result = /AWS::([^:]*)::[\w]*/g.exec(fullyQualifiedResourceName);
        if (result && result.length >= 2) {
            return result[1];
        }
        throw new Error("Unable to get Service Name, Invalid Fully Qualified Resource Name:" + fullyQualifiedResourceName);
    };
    ResourceNamespace.prototype.getAlexaServiceName = function (fullyQualifiedResourceName) {
        var result = /Alexa::([^:]*)::[\w]*/g.exec(fullyQualifiedResourceName);
        if (result && result.length >= 2) {
            return "Alexa" + result[1];
        }
        throw new Error("Unable to get Service Name, Invalid Alexa Fully Qualified Resource Name:" + fullyQualifiedResourceName);
    };
    ResourceNamespace.prototype.getResourceTypeName = function (fullyQualifiedResourceName) {
        if (fullyQualifiedResourceName.startsWith("Alexa")) {
            return this.getAlexaResourceTypeName(fullyQualifiedResourceName);
        }
        var result = /AWS::[^:]*::([\w]*)/g.exec(fullyQualifiedResourceName);
        if (result && result.length >= 2)
            return result[1];
        throw new Error("Unable to get Resource Type Name, Invalid Fully Qualified Resource Name:" + fullyQualifiedResourceName);
    };
    ResourceNamespace.prototype.getAlexaResourceTypeName = function (fullyQualifiedResourceName) {
        var result = /Alexa::[^:]*::([\w]*)/g.exec(fullyQualifiedResourceName);
        if (result && result.length >= 2)
            return "Alexa" + result[1];
        throw new Error("Unable to get Resource Type Name, Invalid Alexa Fully Qualified Resource Name:" + fullyQualifiedResourceName);
    };
    return ResourceNamespace;
}());
var SourceGenerator = /** @class */ (function () {
    function SourceGenerator(srcDir, rootSpecDir, spec) {
        this.srcDir = srcDir;
        this.rootSpecDir = rootSpecDir;
        this.spec = spec;
        this.serviceFolders = [];
    }
    SourceGenerator.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fullRootSpecDir, resourceTypeNames, _i, resourceTypeNames_1, resourceNamespace, namespace;
            return __generator(this, function (_a) {
                this.serviceFolders = [];
                this.ensureDirectory(this.srcDir + this.rootSpecDir);
                fullRootSpecDir = this.srcDir + this.rootSpecDir + '/';
                fs_1.writeFileSync(fullRootSpecDir + "index.ts", "//AWS Exports\n");
                resourceTypeNames = Object.keys(this.spec.ResourceTypes);
                for (_i = 0, resourceTypeNames_1 = resourceTypeNames; _i < resourceTypeNames_1.length; _i++) {
                    resourceNamespace = resourceTypeNames_1[_i];
                    namespace = new ResourceNamespace(resourceNamespace);
                    this.createServiceDirectory(fullRootSpecDir, namespace.serviceName);
                    this.createResourceSrcFile(this.spec.ResourceTypes[namespace.fullyQualifiedResourceName], namespace, fullRootSpecDir + namespace.serviceName, this.spec);
                }
                return [2 /*return*/];
            });
        });
    };
    SourceGenerator.prototype.createServiceDirectory = function (parentDir, serviceName) {
        if (this.serviceFolders.includes(serviceName))
            return;
        this.ensureDirectory(parentDir + serviceName);
        fs_1.writeFileSync(parentDir + serviceName + "/index.ts", "//" + serviceName + " exports\n");
        fs_1.appendFileSync(parentDir + "index.ts", "import * as " + serviceName + " from './" + serviceName + "';\nexport {" + serviceName + "};\n");
        this.serviceFolders.push(serviceName);
    };
    SourceGenerator.prototype.createResourceSrcFile = function (resourceType, namespace, serviceDir, spec) {
        var outfile = serviceDir + '/' + namespace.resouceTypeName + '.ts';
        fs_1.writeFileSync(outfile, ResourceClassGenerator_1.generateResourceNamespace(namespace.fullyQualifiedResourceName, spec));
        fs_1.appendFileSync(serviceDir + '/index.ts', "export * from './" + namespace.resouceTypeName + "';\n");
    };
    SourceGenerator.prototype.ensureDirectory = function (dir) {
        try {
            try {
                //checks if the directory exists, throws error otherwise
                var rootStat = fs_1.statSync(dir);
            }
            catch (existError) {
                //if the directory doesn't exist, try to create it
                fs_1.mkdirSync(dir);
            }
            //checks for write access on directory, throws error otherwise
            fs_1.accessSync(dir, fs_1.constants.W_OK);
        }
        catch (err) {
            console.log(JSON.stringify(err, null, 2));
            throw ("Error while creating source directory:" + dir);
        }
    };
    return SourceGenerator;
}());
exports.SourceGenerator = SourceGenerator;
function loadSpecification(filename) {
    return new Promise(function (resolve, reject) {
        fs_1.readFile(filename, function (error, data) {
            if (error) {
                reject(error);
            }
            try {
                var specData = JSON.parse(data.toString('utf8'));
                //loadPropertyTypeMap(specData.PropertyTypes);
                var spec = {
                    PropertyTypes: loadPropertyTypeMap(specData.PropertyTypes),
                    ResourceTypes: specData.ResourceTypes
                };
                console.log("Resolving");
                resolve(spec);
            }
            catch (error) {
                console.log('Rejected');
                reject(error);
            }
        });
    });
}
exports.loadSpecification = loadSpecification;
function loadPropertyTypeMap(propertyTypeData) {
    console.log("loadPropertyTypeMap");
    var propTypeNames = Object.keys(propertyTypeData);
    var propertyTypeMap = {};
    propTypeNames.forEach(function (name) {
        var ptData = propertyTypeData[name];
        var propertyType = {
            Documentation: ptData.Documentation,
            Properties: ptData.Properties
        };
        propertyTypeMap[name] = propertyType;
    });
    return propertyTypeMap;
}
//# sourceMappingURL=GeneratorUtil.js.map