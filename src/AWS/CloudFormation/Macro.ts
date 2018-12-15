import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Macro extends AWSResource<Macro_ResourceProperties> {
	constructor(name:string,properties:Macro_ResourceProperties){
		super(name,properties,"AWS::CloudFormation::Macro");
	}
}

export interface Macro_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	FunctionName:AWSStringProperty;
	LogGroupName?:AWSStringProperty;
	LogRoleARN?:AWSStringProperty;
	Name:AWSStringProperty;

}
