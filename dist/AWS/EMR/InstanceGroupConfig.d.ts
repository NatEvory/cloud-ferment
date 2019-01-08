import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class InstanceGroupConfig extends AWSResource<InstanceGroupConfig_ResourceProperties> {
    constructor(name: string, properties: InstanceGroupConfig_ResourceProperties, dependsOn?: string[]);
}
export interface InstanceGroupConfig_ResourceProperties extends AWSResourceProperties {
    AutoScalingPolicy?: InstanceGroupConfig_AutoScalingPolicy;
    BidPrice?: AWSStringProperty;
    Configurations?: InstanceGroupConfig_Configuration[];
    EbsConfiguration?: InstanceGroupConfig_EbsConfiguration;
    InstanceCount: number;
    InstanceRole: AWSStringProperty;
    InstanceType: AWSStringProperty;
    JobFlowId: AWSStringProperty;
    Market?: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface InstanceGroupConfig_EbsBlockDeviceConfig {
    VolumeSpecification: InstanceGroupConfig_VolumeSpecification;
    VolumesPerInstance?: number;
}
export interface InstanceGroupConfig_Configuration {
    Classification?: AWSStringProperty;
    ConfigurationProperties?: {
        [key: string]: AWSStringProperty;
    };
    Configurations?: InstanceGroupConfig_Configuration[];
}
export interface InstanceGroupConfig_MetricDimension {
    Key: AWSStringProperty;
    Value: AWSStringProperty;
}
export interface InstanceGroupConfig_SimpleScalingPolicyConfiguration {
    AdjustmentType?: AWSStringProperty;
    CoolDown?: number;
    ScalingAdjustment: number;
}
export interface InstanceGroupConfig_ScalingRule {
    Action: InstanceGroupConfig_ScalingAction;
    Description?: AWSStringProperty;
    Name: AWSStringProperty;
    Trigger: InstanceGroupConfig_ScalingTrigger;
}
export interface InstanceGroupConfig_ScalingAction {
    Market?: AWSStringProperty;
    SimpleScalingPolicyConfiguration: InstanceGroupConfig_SimpleScalingPolicyConfiguration;
}
export interface InstanceGroupConfig_ScalingTrigger {
    CloudWatchAlarmDefinition: InstanceGroupConfig_CloudWatchAlarmDefinition;
}
export interface InstanceGroupConfig_ScalingConstraints {
    MaxCapacity: number;
    MinCapacity: number;
}
export interface InstanceGroupConfig_CloudWatchAlarmDefinition {
    ComparisonOperator: AWSStringProperty;
    Dimensions?: InstanceGroupConfig_MetricDimension[];
    EvaluationPeriods?: number;
    MetricName: AWSStringProperty;
    Namespace?: AWSStringProperty;
    Period: number;
    Statistic?: AWSStringProperty;
    Threshold: number;
    Unit?: AWSStringProperty;
}
export interface InstanceGroupConfig_VolumeSpecification {
    Iops?: number;
    SizeInGB: number;
    VolumeType: AWSStringProperty;
}
export interface InstanceGroupConfig_AutoScalingPolicy {
    Constraints: InstanceGroupConfig_ScalingConstraints;
    Rules: InstanceGroupConfig_ScalingRule[];
}
export interface InstanceGroupConfig_EbsConfiguration {
    EbsBlockDeviceConfigs?: InstanceGroupConfig_EbsBlockDeviceConfig[];
    EbsOptimized?: boolean;
}
