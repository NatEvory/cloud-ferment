"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var SpecificationNamespace_1 = require("../generator/SpecificationNamespace");
describe('should get parts of a valid ResourceSpecification namespace', function () {
    it('should get parts of a valid ResourceSpecification namespace', function () {
        var validResourceNamespace = 'AWS::SNS::Topic';
        var specNamespace = new SpecificationNamespace_1.SpecificationNamespace(validResourceNamespace);
        chai_1.expect(specNamespace.getRoot()).to.equal('AWS');
        chai_1.expect(specNamespace.getService()).to.equal('SNS');
        chai_1.expect(specNamespace.getResource()).to.equal('Topic');
        chai_1.expect(specNamespace.getProperty()).to.be.undefined;
    });
    it('should get parts of a valid ResourcePropertySpecification namespace', function () {
        var validResourcePropertyNamespace = 'AWS::SNS::Topic.Subscription';
        var specNamespace = new SpecificationNamespace_1.SpecificationNamespace(validResourcePropertyNamespace);
        chai_1.expect(specNamespace.getRoot()).to.equal('AWS');
        chai_1.expect(specNamespace.getService()).to.equal('SNS');
        chai_1.expect(specNamespace.getResource()).to.equal('Topic');
        chai_1.expect(specNamespace.getProperty()).to.equal('Subscription');
    });
});
//# sourceMappingURL=SpecificationNamespace.spec.js.map