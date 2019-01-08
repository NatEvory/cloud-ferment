"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AWSResource_1 = require("../../AWSResource");
var DocumentationVersion = /** @class */ (function (_super) {
    __extends(DocumentationVersion, _super);
    function DocumentationVersion(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::ApiGateway::DocumentationVersion", dependsOn) || this;
    }
    return DocumentationVersion;
}(AWSResource_1.AWSResource));
exports.DocumentationVersion = DocumentationVersion;
//# sourceMappingURL=DocumentationVersion.js.map