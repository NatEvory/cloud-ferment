import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ScalingPolicy extends AWSResource<ScalingPolicy_ResourceProperties> {
    constructor(name: string, properties: ScalingPolicy_ResourceProperties, dependsOn?: string[]);
}
export interface ScalingPolicy_ResourceProperties extends AWSResourceProperties {
    AdjustmentType?: AWSStringProperty;
    AutoScalingGroupName: AWSStringProperty;
    Cooldown?: AWSStringProperty;
    EstimatedInstanceWarmup?: number;
    MetricAggregationType?: AWSStringProperty;
    MinAdjustmentMagnitude?: number;
    PolicyType?: AWSStringProperty;
    ScalingAdjustment?: number;
    StepAdjustments?: ScalingPolicy_StepAdjustment[];
    TargetTrackingConfiguration?: ScalingPolicy_TargetTrackingConfiguration;
}
export interface ScalingPolicy_MetricDimension {
    Name: AWSStringProperty;
    Value: AWSStringProperty;
}
export interface ScalingPolicy_CustomizedMetricSpecification {
    Dimensions?: ScalingPolicy_MetricDimension[];
    MetricName: AWSStringProperty;
    Namespace: AWSStringProperty;
    Statistic: AWSStringProperty;
    Unit?: AWSStringProperty;
}
export interface ScalingPolicy_PredefinedMetricSpecification {
    PredefinedMetricType: AWSStringProperty;
    ResourceLabel?: AWSStringProperty;
}
export interface ScalingPolicy_TargetTrackingConfiguration {
    CustomizedMetricSpecification?: ScalingPolicy_CustomizedMetricSpecification;
    DisableScaleIn?: boolean;
    PredefinedMetricSpecification?: ScalingPolicy_PredefinedMetricSpecification;
    TargetValue: number;
}
export interface ScalingPolicy_StepAdjustment {
    MetricIntervalLowerBound?: number;
    MetricIntervalUpperBound?: number;
    ScalingAdjustment: number;
}
