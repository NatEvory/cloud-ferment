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
var MaintenanceWindow = /** @class */ (function (_super) {
    __extends(MaintenanceWindow, _super);
    function MaintenanceWindow(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::SSM::MaintenanceWindow", dependsOn) || this;
    }
    return MaintenanceWindow;
}(AWSResource_1.AWSResource));
exports.MaintenanceWindow = MaintenanceWindow;
//# sourceMappingURL=MaintenanceWindow.js.map