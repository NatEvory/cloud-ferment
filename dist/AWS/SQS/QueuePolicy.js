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
var QueuePolicy = /** @class */ (function (_super) {
    __extends(QueuePolicy, _super);
    function QueuePolicy(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::SQS::QueuePolicy", dependsOn) || this;
    }
    return QueuePolicy;
}(AWSResource_1.AWSResource));
exports.QueuePolicy = QueuePolicy;
//# sourceMappingURL=QueuePolicy.js.map