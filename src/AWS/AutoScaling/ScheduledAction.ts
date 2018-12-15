import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ScheduledAction extends AWSResource<ScheduledAction_ResourceProperties> {
	constructor(name:string,properties:ScheduledAction_ResourceProperties){
		super(name,properties,"AWS::AutoScaling::ScheduledAction");
	}
}

export interface ScheduledAction_ResourceProperties extends AWSResourceProperties {
	AutoScalingGroupName:AWSStringProperty;
	DesiredCapacity?:number;
	EndTime?:AWSStringProperty;
	MaxSize?:number;
	MinSize?:number;
	Recurrence?:AWSStringProperty;
	StartTime?:AWSStringProperty;

}
