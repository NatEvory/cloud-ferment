import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ScalingPolicy extends AWSResource<ScalingPolicy_ResourceProperties> {
	constructor(name:string,properties:ScalingPolicy_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApplicationAutoScaling::ScalingPolicy",dependsOn);
	}
}

export interface ScalingPolicy_ResourceProperties extends AWSResourceProperties {
	PolicyName:AWSStringProperty;
	PolicyType:AWSStringProperty;
	ResourceId?:AWSStringProperty;
	ScalableDimension?:AWSStringProperty;
	ScalingTargetId?:AWSStringProperty;
	ServiceNamespace?:AWSStringProperty;
	StepScalingPolicyConfiguration?:ScalingPolicy_StepScalingPolicyConfiguration;
	TargetTrackingScalingPolicyConfiguration?:ScalingPolicy_TargetTrackingScalingPolicyConfiguration;

}
export interface ScalingPolicy_StepScalingPolicyConfiguration {
	AdjustmentType?:AWSStringProperty;
	Cooldown?:number;
	MetricAggregationType?:AWSStringProperty;
	MinAdjustmentMagnitude?:number;
	StepAdjustments?:ScalingPolicy_StepAdjustment[];

}
export interface ScalingPolicy_MetricDimension {
	Name:AWSStringProperty;
	Value:AWSStringProperty;

}
export interface ScalingPolicy_StepAdjustment {
	MetricIntervalLowerBound?:number;
	MetricIntervalUpperBound?:number;
	ScalingAdjustment:number;

}
export interface ScalingPolicy_PredefinedMetricSpecification {
	PredefinedMetricType:AWSStringProperty;
	ResourceLabel?:AWSStringProperty;

}
export interface ScalingPolicy_CustomizedMetricSpecification {
	Dimensions?:ScalingPolicy_MetricDimension[];
	MetricName:AWSStringProperty;
	Namespace:AWSStringProperty;
	Statistic:AWSStringProperty;
	Unit?:AWSStringProperty;

}
export interface ScalingPolicy_TargetTrackingScalingPolicyConfiguration {
	CustomizedMetricSpecification?:ScalingPolicy_CustomizedMetricSpecification;
	DisableScaleIn?:boolean;
	PredefinedMetricSpecification?:ScalingPolicy_PredefinedMetricSpecification;
	ScaleInCooldown?:number;
	ScaleOutCooldown?:number;
	TargetValue:number;

}
