import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class LaunchConfiguration extends AWSResource<LaunchConfiguration_ResourceProperties> {
    constructor(name: string, properties: LaunchConfiguration_ResourceProperties);
}
export interface LaunchConfiguration_ResourceProperties extends AWSResourceProperties {
    AssociatePublicIpAddress?: boolean;
    BlockDeviceMappings?: LaunchConfiguration_BlockDeviceMapping[];
    ClassicLinkVPCId?: AWSStringProperty;
    ClassicLinkVPCSecurityGroups?: AWSStringListProperty;
    EbsOptimized?: boolean;
    IamInstanceProfile?: AWSStringProperty;
    ImageId: AWSStringProperty;
    InstanceId?: AWSStringProperty;
    InstanceMonitoring?: boolean;
    InstanceType: AWSStringProperty;
    KernelId?: AWSStringProperty;
    KeyName?: AWSStringProperty;
    LaunchConfigurationName?: AWSStringProperty;
    PlacementTenancy?: AWSStringProperty;
    RamDiskId?: AWSStringProperty;
    SecurityGroups?: AWSStringListProperty;
    SpotPrice?: AWSStringProperty;
    UserData?: AWSStringProperty;
}
export interface LaunchConfiguration_BlockDeviceMapping {
    DeviceName: AWSStringProperty;
    Ebs?: LaunchConfiguration_BlockDevice;
    NoDevice?: boolean;
    VirtualName?: AWSStringProperty;
}
export interface LaunchConfiguration_BlockDevice {
    DeleteOnTermination?: boolean;
    Encrypted?: boolean;
    Iops?: number;
    SnapshotId?: AWSStringProperty;
    VolumeSize?: number;
    VolumeType?: AWSStringProperty;
}
