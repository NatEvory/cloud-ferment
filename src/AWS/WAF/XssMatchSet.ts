import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class XssMatchSet extends AWSResource<XssMatchSet_ResourceProperties> {
	constructor(name:string,properties:XssMatchSet_ResourceProperties){
		super(name,properties,"AWS::WAF::XssMatchSet");
	}
}

export interface XssMatchSet_ResourceProperties extends AWSResourceProperties {
	Name:AWSStringProperty;
	XssMatchTuples:XssMatchSet_XssMatchTuple[];

}
export interface XssMatchSet_FieldToMatch {
	Data?:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface XssMatchSet_XssMatchTuple {
	FieldToMatch:XssMatchSet_FieldToMatch;
	TextTransformation:AWSStringProperty;

}
