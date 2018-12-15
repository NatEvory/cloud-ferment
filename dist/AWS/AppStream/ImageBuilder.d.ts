import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ImageBuilder extends AWSResource<ImageBuilder_ResourceProperties> {
    constructor(name: string, properties: ImageBuilder_ResourceProperties);
}
export interface ImageBuilder_ResourceProperties extends AWSResourceProperties {
    ImageName?: AWSStringProperty;
    Description?: AWSStringProperty;
    VpcConfig?: ImageBuilder_VpcConfig;
    EnableDefaultInternetAccess?: boolean;
    DisplayName?: AWSStringProperty;
    DomainJoinInfo?: ImageBuilder_DomainJoinInfo;
    AppstreamAgentVersion?: AWSStringProperty;
    InstanceType: AWSStringProperty;
    Name?: AWSStringProperty;
    ImageArn?: AWSStringProperty;
}
export interface ImageBuilder_VpcConfig {
    SecurityGroupIds?: AWSStringListProperty;
    SubnetIds?: AWSStringListProperty;
}
export interface ImageBuilder_DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: AWSStringProperty;
    DirectoryName?: AWSStringProperty;
}
