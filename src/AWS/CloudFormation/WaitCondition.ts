import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class WaitCondition extends AWSResource<WaitCondition_ResourceProperties> {
	constructor(name:string,properties:WaitCondition_ResourceProperties){
		super(name,properties,"AWS::CloudFormation::WaitCondition");
	}
}

export interface WaitCondition_ResourceProperties extends AWSResourceProperties {
	Count?:number;
	Handle?:AWSStringProperty;
	Timeout?:AWSStringProperty;

}
