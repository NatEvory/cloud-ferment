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
var EgressOnlyInternetGateway = /** @class */ (function (_super) {
    __extends(EgressOnlyInternetGateway, _super);
    function EgressOnlyInternetGateway(name, properties) {
        return _super.call(this, name, properties, "AWS::EC2::EgressOnlyInternetGateway") || this;
    }
    return EgressOnlyInternetGateway;
}(AWSResource_1.AWSResource));
exports.EgressOnlyInternetGateway = EgressOnlyInternetGateway;
//# sourceMappingURL=EgressOnlyInternetGateway.js.map