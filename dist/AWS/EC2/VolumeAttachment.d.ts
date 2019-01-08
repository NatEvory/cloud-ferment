import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VolumeAttachment extends AWSResource<VolumeAttachment_ResourceProperties> {
    constructor(name: string, properties: VolumeAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface VolumeAttachment_ResourceProperties extends AWSResourceProperties {
    Device: AWSStringProperty;
    InstanceId: AWSStringProperty;
    VolumeId: AWSStringProperty;
}
