import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LifecycleHook extends AWSResource<LifecycleHook_ResourceProperties> {
	constructor(name:string,properties:LifecycleHook_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AutoScaling::LifecycleHook",dependsOn);
	}
}

export interface LifecycleHook_ResourceProperties extends AWSResourceProperties {
	AutoScalingGroupName:AWSStringProperty;
	DefaultResult?:AWSStringProperty;
	HeartbeatTimeout?:number;
	LifecycleHookName?:AWSStringProperty;
	LifecycleTransition:AWSStringProperty;
	NotificationMetadata?:AWSStringProperty;
	NotificationTargetARN?:AWSStringProperty;
	RoleARN?:AWSStringProperty;

}
