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
var NotebookInstance = /** @class */ (function (_super) {
    __extends(NotebookInstance, _super);
    function NotebookInstance(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::SageMaker::NotebookInstance", dependsOn) || this;
    }
    return NotebookInstance;
}(AWSResource_1.AWSResource));
exports.NotebookInstance = NotebookInstance;
//# sourceMappingURL=NotebookInstance.js.map