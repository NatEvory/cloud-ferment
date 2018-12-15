import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EventSubscription extends AWSResource<EventSubscription_ResourceProperties> {
	constructor(name:string,properties:EventSubscription_ResourceProperties){
		super(name,properties,"AWS::RDS::EventSubscription");
	}
}

export interface EventSubscription_ResourceProperties extends AWSResourceProperties {
	Enabled?:boolean;
	EventCategories?:AWSStringListProperty;
	SnsTopicArn:AWSStringProperty;
	SourceIds?:AWSStringListProperty;
	SourceType?:AWSStringProperty;

}
