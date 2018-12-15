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
var RouteTable = /** @class */ (function (_super) {
    __extends(RouteTable, _super);
    function RouteTable(name, properties) {
        return _super.call(this, name, properties, "AWS::EC2::RouteTable") || this;
    }
    return RouteTable;
}(AWSResource_1.AWSResource));
exports.RouteTable = RouteTable;
//# sourceMappingURL=RouteTable.js.map