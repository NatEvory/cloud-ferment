import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Layer extends AWSResource<Layer_ResourceProperties> {
    constructor(name: string, properties: Layer_ResourceProperties);
}
export interface Layer_ResourceProperties extends AWSResourceProperties {
    Attributes?: Map<string, AWSStringProperty>;
    AutoAssignElasticIps: boolean;
    AutoAssignPublicIps: boolean;
    CustomInstanceProfileArn?: AWSStringProperty;
    CustomJson?: any;
    CustomRecipes?: Layer_Recipes;
    CustomSecurityGroupIds?: AWSStringListProperty;
    EnableAutoHealing: boolean;
    InstallUpdatesOnBoot?: boolean;
    LifecycleEventConfiguration?: Layer_LifecycleEventConfiguration;
    LoadBasedAutoScaling?: Layer_LoadBasedAutoScaling;
    Name: AWSStringProperty;
    Packages?: AWSStringListProperty;
    Shortname: AWSStringProperty;
    StackId: AWSStringProperty;
    Tags?: Tag[];
    Type: AWSStringProperty;
    UseEbsOptimizedInstances?: boolean;
    VolumeConfigurations?: Layer_VolumeConfiguration[];
}
export interface Layer_ShutdownEventConfiguration {
    DelayUntilElbConnectionsDrained?: boolean;
    ExecutionTimeout?: number;
}
export interface Layer_VolumeConfiguration {
    Encrypted?: boolean;
    Iops?: number;
    MountPoint?: AWSStringProperty;
    NumberOfDisks?: number;
    RaidLevel?: number;
    Size?: number;
    VolumeType?: AWSStringProperty;
}
export interface Layer_AutoScalingThresholds {
    CpuThreshold?: number;
    IgnoreMetricsTime?: number;
    InstanceCount?: number;
    LoadThreshold?: number;
    MemoryThreshold?: number;
    ThresholdsWaitTime?: number;
}
export interface Layer_Recipes {
    Configure?: AWSStringListProperty;
    Deploy?: AWSStringListProperty;
    Setup?: AWSStringListProperty;
    Shutdown?: AWSStringListProperty;
    Undeploy?: AWSStringListProperty;
}
export interface Layer_LifecycleEventConfiguration {
    ShutdownEventConfiguration?: Layer_ShutdownEventConfiguration;
}
export interface Layer_LoadBasedAutoScaling {
    DownScaling?: Layer_AutoScalingThresholds;
    Enable?: boolean;
    UpScaling?: Layer_AutoScalingThresholds;
}
