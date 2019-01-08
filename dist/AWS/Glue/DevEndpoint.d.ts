import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DevEndpoint extends AWSResource<DevEndpoint_ResourceProperties> {
    constructor(name: string, properties: DevEndpoint_ResourceProperties, dependsOn?: string[]);
}
export interface DevEndpoint_ResourceProperties extends AWSResourceProperties {
    ExtraJarsS3Path?: AWSStringProperty;
    EndpointName?: AWSStringProperty;
    PublicKey: AWSStringProperty;
    NumberOfNodes?: number;
    SubnetId?: AWSStringProperty;
    ExtraPythonLibsS3Path?: AWSStringProperty;
    SecurityGroupIds?: AWSStringListProperty;
    RoleArn: AWSStringProperty;
}
