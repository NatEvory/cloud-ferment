import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubscriptionFilter extends AWSResource<SubscriptionFilter_ResourceProperties> {
	constructor(name:string,properties:SubscriptionFilter_ResourceProperties){
		super(name,properties,"AWS::Logs::SubscriptionFilter");
	}
}

export interface SubscriptionFilter_ResourceProperties extends AWSResourceProperties {
	DestinationArn:AWSStringProperty;
	FilterPattern:AWSStringProperty;
	LogGroupName:AWSStringProperty;
	RoleArn?:AWSStringProperty;

}
