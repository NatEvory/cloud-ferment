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
var TrunkInterfaceAssociation = /** @class */ (function (_super) {
    __extends(TrunkInterfaceAssociation, _super);
    function TrunkInterfaceAssociation(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::EC2::TrunkInterfaceAssociation", dependsOn) || this;
    }
    return TrunkInterfaceAssociation;
}(AWSResource_1.AWSResource));
exports.TrunkInterfaceAssociation = TrunkInterfaceAssociation;
//# sourceMappingURL=TrunkInterfaceAssociation.js.map