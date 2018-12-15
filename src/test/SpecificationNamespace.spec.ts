import { expect } from 'chai';
import { SpecificationNamespace } from '../generator/SpecificationNamespace';



describe('should get parts of a valid ResourceSpecification namespace',()=>{
	it('should get parts of a valid ResourceSpecification namespace',()=>{
		let validResourceNamespace:string = 'AWS::SNS::Topic';
		let specNamespace:SpecificationNamespace = new SpecificationNamespace(validResourceNamespace);
		expect(specNamespace.getRoot()).to.equal('AWS');
		expect(specNamespace.getService()).to.equal('SNS');
		expect(specNamespace.getResource()).to.equal('Topic');
		expect(specNamespace.getProperty()).to.be.undefined;
	})
	it('should get parts of a valid ResourcePropertySpecification namespace',()=>{
		let validResourcePropertyNamespace:string = 'AWS::SNS::Topic.Subscription';
		let specNamespace:SpecificationNamespace = new SpecificationNamespace(validResourcePropertyNamespace);
		expect(specNamespace.getRoot()).to.equal('AWS');
		expect(specNamespace.getService()).to.equal('SNS');
		expect(specNamespace.getResource()).to.equal('Topic');
		expect(specNamespace.getProperty()).to.equal('Subscription');
	})
})