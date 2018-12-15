import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EventBusPolicy extends AWSResource<EventBusPolicy_ResourceProperties> {
	constructor(name:string,properties:EventBusPolicy_ResourceProperties){
		super(name,properties,"AWS::Events::EventBusPolicy");
	}
}

export interface EventBusPolicy_ResourceProperties extends AWSResourceProperties {
	Condition?:EventBusPolicy_Condition;
	Action:AWSStringProperty;
	StatementId:AWSStringProperty;
	Principal:AWSStringProperty;

}
export interface EventBusPolicy_Condition {
	Type?:AWSStringProperty;
	Value?:AWSStringProperty;
	Key?:AWSStringProperty;

}
