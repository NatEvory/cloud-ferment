import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Fleet extends AWSResource<Fleet_ResourceProperties> {
    constructor(name: string, properties: Fleet_ResourceProperties);
}
export interface Fleet_ResourceProperties extends AWSResourceProperties {
    BuildId: AWSStringProperty;
    Description?: AWSStringProperty;
    DesiredEC2Instances: number;
    EC2InboundPermissions?: Fleet_IpPermission[];
    EC2InstanceType: AWSStringProperty;
    LogPaths?: AWSStringListProperty;
    MaxSize?: number;
    MinSize?: number;
    Name: AWSStringProperty;
    ServerLaunchParameters?: AWSStringProperty;
    ServerLaunchPath: AWSStringProperty;
}
export interface Fleet_IpPermission {
    FromPort: number;
    IpRange: AWSStringProperty;
    Protocol: AWSStringProperty;
    ToPort: number;
}
