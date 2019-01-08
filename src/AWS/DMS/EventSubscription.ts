import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EventSubscription extends AWSResource<EventSubscription_ResourceProperties> {
	constructor(name:string,properties:EventSubscription_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DMS::EventSubscription",dependsOn);
	}
}

export interface EventSubscription_ResourceProperties extends AWSResourceProperties {
	SourceType?:AWSStringProperty;
	EventCategories?:AWSStringListProperty;
	Enabled?:boolean;
	SubscriptionName?:AWSStringProperty;
	SnsTopicArn:AWSStringProperty;
	SourceIds?:AWSStringListProperty;
	Tags?:Tag[];

}
