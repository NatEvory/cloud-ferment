import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DeliveryChannel extends AWSResource<DeliveryChannel_ResourceProperties> {
    constructor(name: string, properties: DeliveryChannel_ResourceProperties, dependsOn?: string[]);
}
export interface DeliveryChannel_ResourceProperties extends AWSResourceProperties {
    ConfigSnapshotDeliveryProperties?: DeliveryChannel_ConfigSnapshotDeliveryProperties;
    Name?: AWSStringProperty;
    S3BucketName: AWSStringProperty;
    S3KeyPrefix?: AWSStringProperty;
    SnsTopicARN?: AWSStringProperty;
}
export interface DeliveryChannel_ConfigSnapshotDeliveryProperties {
    DeliveryFrequency?: AWSStringProperty;
}
