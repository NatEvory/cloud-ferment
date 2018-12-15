import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class LaunchTemplate extends AWSResource<LaunchTemplate_ResourceProperties> {
    constructor(name: string, properties: LaunchTemplate_ResourceProperties);
}
export interface LaunchTemplate_ResourceProperties extends AWSResourceProperties {
    LaunchTemplateName?: AWSStringProperty;
    LaunchTemplateData?: LaunchTemplate_LaunchTemplateData;
}
export interface LaunchTemplate_PrivateIpAdd {
    PrivateIpAddress?: AWSStringProperty;
    Primary?: boolean;
}
export interface LaunchTemplate_LaunchTemplateData {
    SecurityGroups?: AWSStringListProperty;
    TagSpecifications?: LaunchTemplate_TagSpecification[];
    UserData?: AWSStringProperty;
    InstanceInitiatedShutdownBehavior?: AWSStringProperty;
    BlockDeviceMappings?: LaunchTemplate_BlockDeviceMapping[];
    IamInstanceProfile?: LaunchTemplate_IamInstanceProfile;
    KernelId?: AWSStringProperty;
    SecurityGroupIds?: AWSStringListProperty;
    EbsOptimized?: boolean;
    KeyName?: AWSStringProperty;
    DisableApiTermination?: boolean;
    ElasticGpuSpecifications?: LaunchTemplate_ElasticGpuSpecification[];
    Placement?: LaunchTemplate_Placement;
    InstanceMarketOptions?: LaunchTemplate_InstanceMarketOptions;
    NetworkInterfaces?: LaunchTemplate_NetworkInterface[];
    ImageId?: AWSStringProperty;
    InstanceType?: AWSStringProperty;
    RamDiskId?: AWSStringProperty;
    Monitoring?: LaunchTemplate_Monitoring;
    CreditSpecification?: LaunchTemplate_CreditSpecification;
}
export interface LaunchTemplate_InstanceMarketOptions {
    SpotOptions?: LaunchTemplate_SpotOptions;
    MarketType?: AWSStringProperty;
}
export interface LaunchTemplate_CreditSpecification {
    CpuCredits?: AWSStringProperty;
}
export interface LaunchTemplate_Monitoring {
    Enabled?: boolean;
}
export interface LaunchTemplate_Placement {
    GroupName?: AWSStringProperty;
    Tenancy?: AWSStringProperty;
    AvailabilityZone?: AWSStringProperty;
    Affinity?: AWSStringProperty;
    HostId?: AWSStringProperty;
}
export interface LaunchTemplate_BlockDeviceMapping {
    Ebs?: LaunchTemplate_Ebs;
    NoDevice?: AWSStringProperty;
    VirtualName?: AWSStringProperty;
    DeviceName?: AWSStringProperty;
}
export interface LaunchTemplate_SpotOptions {
    SpotInstanceType?: AWSStringProperty;
    InstanceInterruptionBehavior?: AWSStringProperty;
    MaxPrice?: AWSStringProperty;
}
export interface LaunchTemplate_ElasticGpuSpecification {
    Type?: AWSStringProperty;
}
export interface LaunchTemplate_TagSpecification {
    ResourceType?: AWSStringProperty;
    Tags?: Tag[];
}
export interface LaunchTemplate_Ipv6Add {
    Ipv6Address?: AWSStringProperty;
}
export interface LaunchTemplate_IamInstanceProfile {
    Arn?: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface LaunchTemplate_NetworkInterface {
    Description?: AWSStringProperty;
    PrivateIpAddress?: AWSStringProperty;
    PrivateIpAddresses?: LaunchTemplate_PrivateIpAdd[];
    SecondaryPrivateIpAddressCount?: number;
    Ipv6AddressCount?: number;
    Groups?: AWSStringListProperty;
    DeviceIndex?: number;
    SubnetId?: AWSStringProperty;
    Ipv6Addresses?: LaunchTemplate_Ipv6Add[];
    AssociatePublicIpAddress?: boolean;
    NetworkInterfaceId?: AWSStringProperty;
    DeleteOnTermination?: boolean;
}
export interface LaunchTemplate_Ebs {
    SnapshotId?: AWSStringProperty;
    VolumeType?: AWSStringProperty;
    KmsKeyId?: AWSStringProperty;
    Encrypted?: boolean;
    Iops?: number;
    VolumeSize?: number;
    DeleteOnTermination?: boolean;
}
