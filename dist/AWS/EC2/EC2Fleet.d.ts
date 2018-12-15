import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EC2Fleet extends AWSResource<EC2Fleet_ResourceProperties> {
    constructor(name: string, properties: EC2Fleet_ResourceProperties);
}
export interface EC2Fleet_ResourceProperties extends AWSResourceProperties {
    TargetCapacitySpecification: EC2Fleet_TargetCapacitySpecificationRequest;
    OnDemandOptions?: EC2Fleet_OnDemandOptionsRequest;
    Type?: AWSStringProperty;
    ExcessCapacityTerminationPolicy?: AWSStringProperty;
    TagSpecifications?: EC2Fleet_TagSpecification[];
    SpotOptions?: EC2Fleet_SpotOptionsRequest;
    ValidFrom?: number;
    ReplaceUnhealthyInstances?: boolean;
    LaunchTemplateConfigs: EC2Fleet_FleetLaunchTemplateConfigRequest[];
    TerminateInstancesWithExpiration?: boolean;
    ValidUntil?: number;
}
export interface EC2Fleet_FleetLaunchTemplateSpecificationRequest {
    LaunchTemplateName?: AWSStringProperty;
    Version?: AWSStringProperty;
    LaunchTemplateId?: AWSStringProperty;
}
export interface EC2Fleet_FleetLaunchTemplateConfigRequest {
    LaunchTemplateSpecification?: EC2Fleet_FleetLaunchTemplateSpecificationRequest;
    Overrides?: EC2Fleet_FleetLaunchTemplateOverridesRequest[];
}
export interface EC2Fleet_OnDemandOptionsRequest {
    AllocationStrategy?: AWSStringProperty;
}
export interface EC2Fleet_TagRequest {
    Value?: AWSStringProperty;
    Key?: AWSStringProperty;
}
export interface EC2Fleet_TargetCapacitySpecificationRequest {
    DefaultTargetCapacityType?: AWSStringProperty;
    TotalTargetCapacity: number;
    OnDemandTargetCapacity?: number;
    SpotTargetCapacity?: number;
}
export interface EC2Fleet_FleetLaunchTemplateOverridesRequest {
    WeightedCapacity?: number;
    Priority?: number;
    AvailabilityZone?: AWSStringProperty;
    SubnetId?: AWSStringProperty;
    InstanceType?: AWSStringProperty;
    MaxPrice?: AWSStringProperty;
}
export interface EC2Fleet_TagSpecification {
    ResourceType?: AWSStringProperty;
    Tags?: EC2Fleet_TagRequest[];
}
export interface EC2Fleet_SpotOptionsRequest {
    AllocationStrategy?: AWSStringProperty;
    InstanceInterruptionBehavior?: AWSStringProperty;
    InstancePoolsToUseCount?: number;
}
