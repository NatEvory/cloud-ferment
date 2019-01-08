import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AutoScalingGroup extends AWSResource<AutoScalingGroup_ResourceProperties> {
	constructor(name:string,properties:AutoScalingGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AutoScaling::AutoScalingGroup",dependsOn);
	}
}

export interface AutoScalingGroup_ResourceProperties extends AWSResourceProperties {
	AutoScalingGroupName?:AWSStringProperty;
	AvailabilityZones?:AWSStringListProperty;
	Cooldown?:AWSStringProperty;
	DesiredCapacity?:AWSStringProperty;
	HealthCheckGracePeriod?:number;
	HealthCheckType?:AWSStringProperty;
	InstanceId?:AWSStringProperty;
	LaunchConfigurationName?:AWSStringProperty;
	LaunchTemplate?:AutoScalingGroup_LaunchTemplateSpecification;
	LifecycleHookSpecificationList?:AutoScalingGroup_LifecycleHookSpecification[];
	LoadBalancerNames?:AWSStringListProperty;
	MaxSize:AWSStringProperty;
	MetricsCollection?:AutoScalingGroup_MetricsCollection[];
	MinSize:AWSStringProperty;
	MixedInstancesPolicy?:AutoScalingGroup_MixedInstancesPolicy;
	NotificationConfigurations?:AutoScalingGroup_NotificationConfiguration[];
	PlacementGroup?:AWSStringProperty;
	ServiceLinkedRoleARN?:AWSStringProperty;
	Tags?:AutoScalingGroup_TagProperty[];
	TargetGroupARNs?:AWSStringListProperty;
	TerminationPolicies?:AWSStringListProperty;
	VPCZoneIdentifier?:AWSStringListProperty;

}
export interface AutoScalingGroup_LaunchTemplateOverrides {
	InstanceType?:AWSStringProperty;

}
export interface AutoScalingGroup_LifecycleHookSpecification {
	DefaultResult?:AWSStringProperty;
	HeartbeatTimeout?:number;
	LifecycleHookName:AWSStringProperty;
	LifecycleTransition:AWSStringProperty;
	NotificationMetadata?:AWSStringProperty;
	NotificationTargetARN?:AWSStringProperty;
	RoleARN?:AWSStringProperty;

}
export interface AutoScalingGroup_MixedInstancesPolicy {
	InstancesDistribution?:AutoScalingGroup_InstancesDistribution;
	LaunchTemplate:AutoScalingGroup_LaunchTemplate;

}
export interface AutoScalingGroup_LaunchTemplateSpecification {
	LaunchTemplateId?:AWSStringProperty;
	LaunchTemplateName?:AWSStringProperty;
	Version:AWSStringProperty;

}
export interface AutoScalingGroup_NotificationConfiguration {
	NotificationTypes?:AWSStringListProperty;
	TopicARN:AWSStringProperty;

}
export interface AutoScalingGroup_MetricsCollection {
	Granularity:AWSStringProperty;
	Metrics?:AWSStringListProperty;

}
export interface AutoScalingGroup_InstancesDistribution {
	OnDemandAllocationStrategy?:AWSStringProperty;
	OnDemandBaseCapacity?:number;
	OnDemandPercentageAboveBaseCapacity?:number;
	SpotAllocationStrategy?:AWSStringProperty;
	SpotInstancePools?:number;
	SpotMaxPrice?:AWSStringProperty;

}
export interface AutoScalingGroup_LaunchTemplate {
	LaunchTemplateSpecification:AutoScalingGroup_LaunchTemplateSpecification;
	Overrides?:AutoScalingGroup_LaunchTemplateOverrides[];

}
export interface AutoScalingGroup_TagProperty {
	Key:AWSStringProperty;
	PropagateAtLaunch:boolean;
	Value:AWSStringProperty;

}
