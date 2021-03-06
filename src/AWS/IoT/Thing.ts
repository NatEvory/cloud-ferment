import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Thing extends AWSResource<Thing_ResourceProperties> {
	constructor(name:string,properties:Thing_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT::Thing",dependsOn);
	}
}

export interface Thing_ResourceProperties extends AWSResourceProperties {
	AttributePayload?:Thing_AttributePayload;
	ThingName?:AWSStringProperty;

}
export interface Thing_AttributePayload {
	Attributes?:{[key:string]:AWSStringProperty};

}
