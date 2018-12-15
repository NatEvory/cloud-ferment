import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ResourceDataSync extends AWSResource<ResourceDataSync_ResourceProperties> {
    constructor(name: string, properties: ResourceDataSync_ResourceProperties);
}
export interface ResourceDataSync_ResourceProperties extends AWSResourceProperties {
    KMSKeyArn?: AWSStringProperty;
    BucketName: AWSStringProperty;
    BucketRegion: AWSStringProperty;
    SyncFormat: AWSStringProperty;
    SyncName: AWSStringProperty;
    BucketPrefix?: AWSStringProperty;
}
