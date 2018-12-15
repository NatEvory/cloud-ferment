import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SizeConstraintSet extends AWSResource<SizeConstraintSet_ResourceProperties> {
	constructor(name:string,properties:SizeConstraintSet_ResourceProperties){
		super(name,properties,"AWS::WAF::SizeConstraintSet");
	}
}

export interface SizeConstraintSet_ResourceProperties extends AWSResourceProperties {
	Name:AWSStringProperty;
	SizeConstraints:SizeConstraintSet_SizeConstraint[];

}
export interface SizeConstraintSet_FieldToMatch {
	Data?:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface SizeConstraintSet_SizeConstraint {
	ComparisonOperator:AWSStringProperty;
	FieldToMatch:SizeConstraintSet_FieldToMatch;
	Size:number;
	TextTransformation:AWSStringProperty;

}
