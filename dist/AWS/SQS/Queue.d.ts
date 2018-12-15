import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Queue extends AWSResource<Queue_ResourceProperties> {
    constructor(name: string, properties: Queue_ResourceProperties);
}
export interface Queue_ResourceProperties extends AWSResourceProperties {
    ContentBasedDeduplication?: boolean;
    DelaySeconds?: number;
    FifoQueue?: boolean;
    KmsDataKeyReusePeriodSeconds?: number;
    KmsMasterKeyId?: AWSStringProperty;
    MaximumMessageSize?: number;
    MessageRetentionPeriod?: number;
    QueueName?: AWSStringProperty;
    ReceiveMessageWaitTimeSeconds?: number;
    RedrivePolicy?: any;
    Tags?: Tag[];
    VisibilityTimeout?: number;
}
