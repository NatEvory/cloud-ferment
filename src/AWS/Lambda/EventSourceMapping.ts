import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EventSourceMapping extends AWSResource<EventSourceMapping_ResourceProperties> {
	constructor(name:string,properties:EventSourceMapping_ResourceProperties){
		super(name,properties,"AWS::Lambda::EventSourceMapping");
	}
}

export interface EventSourceMapping_ResourceProperties extends AWSResourceProperties {
	BatchSize?:number;
	Enabled?:boolean;
	EventSourceArn:AWSStringProperty;
	FunctionName:AWSStringProperty;
	StartingPosition?:AWSStringProperty;

}
