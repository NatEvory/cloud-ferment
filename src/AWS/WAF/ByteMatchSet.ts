import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ByteMatchSet extends AWSResource<ByteMatchSet_ResourceProperties> {
	constructor(name:string,properties:ByteMatchSet_ResourceProperties){
		super(name,properties,"AWS::WAF::ByteMatchSet");
	}
}

export interface ByteMatchSet_ResourceProperties extends AWSResourceProperties {
	ByteMatchTuples?:ByteMatchSet_ByteMatchTuple[];
	Name:AWSStringProperty;

}
export interface ByteMatchSet_ByteMatchTuple {
	FieldToMatch:ByteMatchSet_FieldToMatch;
	PositionalConstraint:AWSStringProperty;
	TargetString?:AWSStringProperty;
	TargetStringBase64?:AWSStringProperty;
	TextTransformation:AWSStringProperty;

}
export interface ByteMatchSet_FieldToMatch {
	Data?:AWSStringProperty;
	Type:AWSStringProperty;

}
