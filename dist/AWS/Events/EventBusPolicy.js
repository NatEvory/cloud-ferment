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
var EventBusPolicy = /** @class */ (function (_super) {
    __extends(EventBusPolicy, _super);
    function EventBusPolicy(name, properties, dependsOn) {
        return _super.call(this, name, properties, "AWS::Events::EventBusPolicy", dependsOn) || this;
    }
    return EventBusPolicy;
}(AWSResource_1.AWSResource));
exports.EventBusPolicy = EventBusPolicy;
//# sourceMappingURL=EventBusPolicy.js.map