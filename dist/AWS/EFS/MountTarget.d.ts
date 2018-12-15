import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class MountTarget extends AWSResource<MountTarget_ResourceProperties> {
    constructor(name: string, properties: MountTarget_ResourceProperties);
}
export interface MountTarget_ResourceProperties extends AWSResourceProperties {
    FileSystemId: AWSStringProperty;
    IpAddress?: AWSStringProperty;
    SecurityGroups: AWSStringListProperty;
    SubnetId: AWSStringProperty;
}
