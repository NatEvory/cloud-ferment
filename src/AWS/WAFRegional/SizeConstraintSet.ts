import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SizeConstraintSet extends AWSResource<SizeConstraintSet_ResourceProperties> {
	constructor(name:string,properties:SizeConstraintSet_ResourceProperties){
		super(name,properties,"AWS::WAFRegional::SizeConstraintSet");
	}
}

export interface SizeConstraintSet_ResourceProperties extends AWSResourceProperties {
	SizeConstraints?:SizeConstraintSet_SizeConstraint[];
	Name:AWSStringProperty;

}
export interface SizeConstraintSet_SizeConstraint {
	ComparisonOperator:AWSStringProperty;
	Size:number;
	TextTransformation:AWSStringProperty;
	FieldToMatch:SizeConstraintSet_FieldToMatch;

}
export interface SizeConstraintSet_FieldToMatch {
	Type:AWSStringProperty;
	Data?:AWSStringProperty;

}
