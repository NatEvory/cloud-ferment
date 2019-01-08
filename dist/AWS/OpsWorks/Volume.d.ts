import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Volume extends AWSResource<Volume_ResourceProperties> {
    constructor(name: string, properties: Volume_ResourceProperties, dependsOn?: string[]);
}
export interface Volume_ResourceProperties extends AWSResourceProperties {
    Ec2VolumeId: AWSStringProperty;
    MountPoint?: AWSStringProperty;
    Name?: AWSStringProperty;
    StackId: AWSStringProperty;
}
