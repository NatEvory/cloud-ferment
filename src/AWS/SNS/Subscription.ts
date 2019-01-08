import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Subscription extends AWSResource<Subscription_ResourceProperties> {
	constructor(name:string,properties:Subscription_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SNS::Subscription",dependsOn);
	}
}

export interface Subscription_ResourceProperties extends AWSResourceProperties {
	DeliveryPolicy?:any;
	Endpoint?:AWSStringProperty;
	FilterPolicy?:any;
	Protocol?:AWSStringProperty;
	RawMessageDelivery?:boolean;
	Region?:AWSStringProperty;
	TopicArn?:AWSStringProperty;

}
