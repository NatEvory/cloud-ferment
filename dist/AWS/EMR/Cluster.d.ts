import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Cluster extends AWSResource<Cluster_ResourceProperties> {
    constructor(name: string, properties: Cluster_ResourceProperties);
}
export interface Cluster_ResourceProperties extends AWSResourceProperties {
    AdditionalInfo?: any;
    Applications?: Cluster_Application[];
    AutoScalingRole?: AWSStringProperty;
    BootstrapActions?: Cluster_BootstrapActionConfig[];
    Configurations?: Cluster_Configuration[];
    CustomAmiId?: AWSStringProperty;
    EbsRootVolumeSize?: number;
    Instances: Cluster_JobFlowInstancesConfig;
    JobFlowRole: AWSStringProperty;
    KerberosAttributes?: Cluster_KerberosAttributes;
    LogUri?: AWSStringProperty;
    Name: AWSStringProperty;
    ReleaseLabel?: AWSStringProperty;
    ScaleDownBehavior?: AWSStringProperty;
    SecurityConfiguration?: AWSStringProperty;
    ServiceRole: AWSStringProperty;
    Steps?: Cluster_StepConfig[];
    Tags?: Tag[];
    VisibleToAllUsers?: boolean;
}
export interface Cluster_InstanceGroupConfig {
    AutoScalingPolicy?: Cluster_AutoScalingPolicy;
    BidPrice?: AWSStringProperty;
    Configurations?: Cluster_Configuration[];
    EbsConfiguration?: Cluster_EbsConfiguration;
    InstanceCount: number;
    InstanceType: AWSStringProperty;
    Market?: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface Cluster_SpotProvisioningSpecification {
    BlockDurationMinutes?: number;
    TimeoutAction: AWSStringProperty;
    TimeoutDurationMinutes: number;
}
export interface Cluster_BootstrapActionConfig {
    Name: AWSStringProperty;
    ScriptBootstrapAction: Cluster_ScriptBootstrapActionConfig;
}
export interface Cluster_ScalingConstraints {
    MaxCapacity: number;
    MinCapacity: number;
}
export interface Cluster_InstanceFleetConfig {
    InstanceTypeConfigs?: Cluster_InstanceTypeConfig[];
    LaunchSpecifications?: Cluster_InstanceFleetProvisioningSpecifications;
    Name?: AWSStringProperty;
    TargetOnDemandCapacity?: number;
    TargetSpotCapacity?: number;
}
export interface Cluster_JobFlowInstancesConfig {
    AdditionalMasterSecurityGroups?: AWSStringListProperty;
    AdditionalSlaveSecurityGroups?: AWSStringListProperty;
    CoreInstanceFleet?: Cluster_InstanceFleetConfig;
    CoreInstanceGroup?: Cluster_InstanceGroupConfig;
    Ec2KeyName?: AWSStringProperty;
    Ec2SubnetId?: AWSStringProperty;
    EmrManagedMasterSecurityGroup?: AWSStringProperty;
    EmrManagedSlaveSecurityGroup?: AWSStringProperty;
    HadoopVersion?: AWSStringProperty;
    KeepJobFlowAliveWhenNoSteps?: boolean;
    MasterInstanceFleet?: Cluster_InstanceFleetConfig;
    MasterInstanceGroup?: Cluster_InstanceGroupConfig;
    Placement?: Cluster_PlacementType;
    ServiceAccessSecurityGroup?: AWSStringProperty;
    TerminationProtected?: boolean;
}
export interface Cluster_ScalingAction {
    Market?: AWSStringProperty;
    SimpleScalingPolicyConfiguration: Cluster_SimpleScalingPolicyConfiguration;
}
export interface Cluster_StepConfig {
    ActionOnFailure?: AWSStringProperty;
    HadoopJarStep: Cluster_HadoopJarStepConfig;
    Name: AWSStringProperty;
}
export interface Cluster_KerberosAttributes {
    ADDomainJoinPassword?: AWSStringProperty;
    ADDomainJoinUser?: AWSStringProperty;
    CrossRealmTrustPrincipalPassword?: AWSStringProperty;
    KdcAdminPassword: AWSStringProperty;
    Realm: AWSStringProperty;
}
export interface Cluster_SimpleScalingPolicyConfiguration {
    AdjustmentType?: AWSStringProperty;
    CoolDown?: number;
    ScalingAdjustment: number;
}
export interface Cluster_Application {
    AdditionalInfo?: {
        [key: string]: AWSStringProperty;
    };
    Args?: AWSStringListProperty;
    Name?: AWSStringProperty;
    Version?: AWSStringProperty;
}
export interface Cluster_EbsBlockDeviceConfig {
    VolumeSpecification: Cluster_VolumeSpecification;
    VolumesPerInstance?: number;
}
export interface Cluster_PlacementType {
    AvailabilityZone: AWSStringProperty;
}
export interface Cluster_Configuration {
    Classification?: AWSStringProperty;
    ConfigurationProperties?: {
        [key: string]: AWSStringProperty;
    };
    Configurations?: Cluster_Configuration[];
}
export interface Cluster_ScriptBootstrapActionConfig {
    Args?: AWSStringListProperty;
    Path: AWSStringProperty;
}
export interface Cluster_CloudWatchAlarmDefinition {
    ComparisonOperator: AWSStringProperty;
    Dimensions?: Cluster_MetricDimension[];
    EvaluationPeriods?: number;
    MetricName: AWSStringProperty;
    Namespace?: AWSStringProperty;
    Period: number;
    Statistic?: AWSStringProperty;
    Threshold: number;
    Unit?: AWSStringProperty;
}
export interface Cluster_EbsConfiguration {
    EbsBlockDeviceConfigs?: Cluster_EbsBlockDeviceConfig[];
    EbsOptimized?: boolean;
}
export interface Cluster_ScalingRule {
    Action: Cluster_ScalingAction;
    Description?: AWSStringProperty;
    Name: AWSStringProperty;
    Trigger: Cluster_ScalingTrigger;
}
export interface Cluster_KeyValue {
    Key?: AWSStringProperty;
    Value?: AWSStringProperty;
}
export interface Cluster_InstanceTypeConfig {
    BidPrice?: AWSStringProperty;
    BidPriceAsPercentageOfOnDemandPrice?: number;
    Configurations?: Cluster_Configuration[];
    EbsConfiguration?: Cluster_EbsConfiguration;
    InstanceType: AWSStringProperty;
    WeightedCapacity?: number;
}
export interface Cluster_MetricDimension {
    Key: AWSStringProperty;
    Value: AWSStringProperty;
}
export interface Cluster_VolumeSpecification {
    Iops?: number;
    SizeInGB: number;
    VolumeType: AWSStringProperty;
}
export interface Cluster_AutoScalingPolicy {
    Constraints: Cluster_ScalingConstraints;
    Rules: Cluster_ScalingRule[];
}
export interface Cluster_InstanceFleetProvisioningSpecifications {
    SpotSpecification: Cluster_SpotProvisioningSpecification;
}
export interface Cluster_HadoopJarStepConfig {
    Args?: AWSStringListProperty;
    Jar: AWSStringProperty;
    MainClass?: AWSStringProperty;
    StepProperties?: Cluster_KeyValue[];
}
export interface Cluster_ScalingTrigger {
    CloudWatchAlarmDefinition: Cluster_CloudWatchAlarmDefinition;
}
