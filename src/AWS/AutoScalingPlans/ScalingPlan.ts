import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ScalingPlan extends AWSResource<ScalingPlan_ResourceProperties> {
	constructor(name:string,properties:ScalingPlan_ResourceProperties){
		super(name,properties,"AWS::AutoScalingPlans::ScalingPlan");
	}
}

export interface ScalingPlan_ResourceProperties extends AWSResourceProperties {
	ApplicationSource:ScalingPlan_ApplicationSource;
	ScalingInstructions:ScalingPlan_ScalingInstruction[];

}
export interface ScalingPlan_ApplicationSource {
	CloudFormationStackARN?:AWSStringProperty;
	TagFilters?:ScalingPlan_TagFilter[];

}
export interface ScalingPlan_ScalingInstruction {
	DisableDynamicScaling?:boolean;
	ServiceNamespace:AWSStringProperty;
	PredictiveScalingMaxCapacityBehavior?:AWSStringProperty;
	ScalableDimension:AWSStringProperty;
	ScalingPolicyUpdateBehavior?:AWSStringProperty;
	MinCapacity:number;
	TargetTrackingConfigurations:ScalingPlan_TargetTrackingConfiguration[];
	PredictiveScalingMaxCapacityBuffer?:number;
	CustomizedLoadMetricSpecification?:ScalingPlan_CustomizedLoadMetricSpecification;
	PredefinedLoadMetricSpecification?:ScalingPlan_PredefinedLoadMetricSpecification;
	ResourceId:AWSStringProperty;
	ScheduledActionBufferTime?:number;
	MaxCapacity:number;
	PredictiveScalingMode?:AWSStringProperty;

}
export interface ScalingPlan_TargetTrackingConfiguration {
	ScaleOutCooldown?:number;
	TargetValue:number;
	PredefinedScalingMetricSpecification?:ScalingPlan_PredefinedScalingMetricSpecification;
	DisableScaleIn?:boolean;
	ScaleInCooldown?:number;
	EstimatedInstanceWarmup?:number;
	CustomizedScalingMetricSpecification?:ScalingPlan_CustomizedScalingMetricSpecification;

}
export interface ScalingPlan_CustomizedScalingMetricSpecification {
	MetricName:AWSStringProperty;
	Statistic:AWSStringProperty;
	Dimensions?:ScalingPlan_MetricDimension[];
	Unit?:AWSStringProperty;
	Namespace:AWSStringProperty;

}
export interface ScalingPlan_MetricDimension {
	Value:AWSStringProperty;
	Name:AWSStringProperty;

}
export interface ScalingPlan_PredefinedScalingMetricSpecification {
	ResourceLabel?:AWSStringProperty;
	PredefinedScalingMetricType:AWSStringProperty;

}
export interface ScalingPlan_TagFilter {
	Values?:AWSStringListProperty;
	Key:AWSStringProperty;

}
export interface ScalingPlan_PredefinedLoadMetricSpecification {
	PredefinedLoadMetricType:AWSStringProperty;
	ResourceLabel?:AWSStringProperty;

}
export interface ScalingPlan_CustomizedLoadMetricSpecification {
	MetricName:AWSStringProperty;
	Statistic:AWSStringProperty;
	Dimensions?:ScalingPlan_MetricDimension[];
	Unit?:AWSStringProperty;
	Namespace:AWSStringProperty;

}
