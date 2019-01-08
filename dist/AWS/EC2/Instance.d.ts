import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Instance extends AWSResource<Instance_ResourceProperties> {
    constructor(name: string, properties: Instance_ResourceProperties, dependsOn?: string[]);
}
export interface Instance_ResourceProperties extends AWSResourceProperties {
    AdditionalInfo?: AWSStringProperty;
    Affinity?: AWSStringProperty;
    AvailabilityZone?: AWSStringProperty;
    BlockDeviceMappings?: Instance_BlockDeviceMapping[];
    CreditSpecification?: Instance_CreditSpecification;
    DisableApiTermination?: boolean;
    EbsOptimized?: boolean;
    ElasticGpuSpecifications?: Instance_ElasticGpuSpecification[];
    ElasticInferenceAccelerators?: Instance_ElasticInferenceAccelerator[];
    HostId?: AWSStringProperty;
    IamInstanceProfile?: AWSStringProperty;
    ImageId?: AWSStringProperty;
    InstanceInitiatedShutdownBehavior?: AWSStringProperty;
    InstanceType?: AWSStringProperty;
    Ipv6AddressCount?: number;
    Ipv6Addresses?: Instance_InstanceIpv6Address[];
    KernelId?: AWSStringProperty;
    KeyName?: AWSStringProperty;
    LaunchTemplate?: Instance_LaunchTemplateSpecification;
    LicenseSpecifications?: Instance_LicenseSpecification[];
    Monitoring?: boolean;
    NetworkInterfaces?: Instance_NetworkInterface[];
    PlacementGroupName?: AWSStringProperty;
    PrivateIpAddress?: AWSStringProperty;
    RamdiskId?: AWSStringProperty;
    SecurityGroupIds?: AWSStringListProperty;
    SecurityGroups?: AWSStringListProperty;
    SourceDestCheck?: boolean;
    SsmAssociations?: Instance_SsmAssociation[];
    SubnetId?: AWSStringProperty;
    Tags?: Tag[];
    Tenancy?: AWSStringProperty;
    UserData?: AWSStringProperty;
    Volumes?: Instance_Volume[];
}
export interface Instance_ElasticGpuSpecification {
    Type: AWSStringProperty;
}
export interface Instance_NetworkInterface {
    AssociatePublicIpAddress?: boolean;
    DeleteOnTermination?: boolean;
    Description?: AWSStringProperty;
    DeviceIndex: AWSStringProperty;
    GroupSet?: AWSStringListProperty;
    Ipv6AddressCount?: number;
    Ipv6Addresses?: Instance_InstanceIpv6Address[];
    NetworkInterfaceId?: AWSStringProperty;
    PrivateIpAddress?: AWSStringProperty;
    PrivateIpAddresses?: Instance_PrivateIpAddressSpecification[];
    SecondaryPrivateIpAddressCount?: number;
    SubnetId?: AWSStringProperty;
}
export interface Instance_InstanceIpv6Address {
    Ipv6Address: AWSStringProperty;
}
export interface Instance_Volume {
    Device: AWSStringProperty;
    VolumeId: AWSStringProperty;
}
export interface Instance_AssociationParameter {
    Key: AWSStringProperty;
    Value: AWSStringListProperty;
}
export interface Instance_LaunchTemplateSpecification {
    LaunchTemplateId?: AWSStringProperty;
    LaunchTemplateName?: AWSStringProperty;
    Version: AWSStringProperty;
}
export interface Instance_Ebs {
    DeleteOnTermination?: boolean;
    Encrypted?: boolean;
    Iops?: number;
    SnapshotId?: AWSStringProperty;
    VolumeSize?: number;
    VolumeType?: AWSStringProperty;
}
export interface Instance_LicenseSpecification {
    LicenseConfigurationArn: AWSStringProperty;
}
export interface Instance_NoDevice {
}
export interface Instance_SsmAssociation {
    AssociationParameters?: Instance_AssociationParameter[];
    DocumentName: AWSStringProperty;
}
export interface Instance_CreditSpecification {
    CPUCredits?: AWSStringProperty;
}
export interface Instance_ElasticInferenceAccelerator {
    Type: AWSStringProperty;
}
export interface Instance_BlockDeviceMapping {
    DeviceName: AWSStringProperty;
    Ebs?: Instance_Ebs;
    NoDevice?: Instance_NoDevice;
    VirtualName?: AWSStringProperty;
}
export interface Instance_PrivateIpAddressSpecification {
    Primary: boolean;
    PrivateIpAddress: AWSStringProperty;
}
