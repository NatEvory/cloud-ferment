import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class StreamConsumer extends AWSResource<StreamConsumer_ResourceProperties> {
    constructor(name: string, properties: StreamConsumer_ResourceProperties);
}
export interface StreamConsumer_ResourceProperties extends AWSResourceProperties {
    ConsumerName: AWSStringProperty;
    StreamARN: AWSStringProperty;
}
