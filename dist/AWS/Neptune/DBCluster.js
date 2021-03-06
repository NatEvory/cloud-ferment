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
var DBCluster = /** @class */ (function (_super) {
    __extends(DBCluster, _super);
    function DBCluster(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::Neptune::DBCluster", dependsOn) || this;
    }
    return DBCluster;
}(AWSResource_1.AWSResource));
exports.DBCluster = DBCluster;
//# sourceMappingURL=DBCluster.js.map