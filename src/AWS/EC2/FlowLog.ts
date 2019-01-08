import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class FlowLog extends AWSResource<FlowLog_ResourceProperties> {
	constructor(name:string,properties:FlowLog_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::FlowLog",dependsOn);
	}
}

export interface FlowLog_ResourceProperties extends AWSResourceProperties {
	DeliverLogsPermissionArn?:AWSStringProperty;
	LogDestination?:AWSStringProperty;
	LogDestinationType?:AWSStringProperty;
	LogGroupName?:AWSStringProperty;
	ResourceId:AWSStringProperty;
	ResourceType:AWSStringProperty;
	TrafficType:AWSStringProperty;

}
