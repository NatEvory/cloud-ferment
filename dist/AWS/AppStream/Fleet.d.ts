import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Fleet extends AWSResource<Fleet_ResourceProperties> {
    constructor(name: string, properties: Fleet_ResourceProperties);
}
export interface Fleet_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    ComputeCapacity: Fleet_ComputeCapacity;
    VpcConfig?: Fleet_VpcConfig;
    FleetType?: AWSStringProperty;
    EnableDefaultInternetAccess?: boolean;
    DomainJoinInfo?: Fleet_DomainJoinInfo;
    Name?: AWSStringProperty;
    ImageName?: AWSStringProperty;
    MaxUserDurationInSeconds?: number;
    DisconnectTimeoutInSeconds?: number;
    DisplayName?: AWSStringProperty;
    InstanceType: AWSStringProperty;
    ImageArn?: AWSStringProperty;
}
export interface Fleet_ComputeCapacity {
    DesiredInstances: number;
}
export interface Fleet_DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: AWSStringProperty;
    DirectoryName?: AWSStringProperty;
}
export interface Fleet_VpcConfig {
    SubnetIds?: AWSStringListProperty;
    SecurityGroupIds?: AWSStringListProperty;
}
