import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EventSubscription extends AWSResource<EventSubscription_ResourceProperties> {
	constructor(name:string,properties:EventSubscription_ResourceProperties){
		super(name,properties,"AWS::DMS::EventSubscription");
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
