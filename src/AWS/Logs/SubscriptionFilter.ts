import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubscriptionFilter extends AWSResource<SubscriptionFilter_ResourceProperties> {
	constructor(name:string,properties:SubscriptionFilter_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Logs::SubscriptionFilter",dependsOn);
	}
}

export interface SubscriptionFilter_ResourceProperties extends AWSResourceProperties {
	DestinationArn:AWSStringProperty;
	FilterPattern:AWSStringProperty;
	LogGroupName:AWSStringProperty;
	RoleArn?:AWSStringProperty;

}
