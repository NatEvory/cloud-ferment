import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Topic extends AWSResource<Topic_ResourceProperties> {
    constructor(name: string, properties: Topic_ResourceProperties);
}
export interface Topic_ResourceProperties extends AWSResourceProperties {
    DisplayName?: AWSStringProperty;
    KmsMasterKeyId?: AWSStringProperty;
    Subscription?: Topic_Subscription[];
    TopicName?: AWSStringProperty;
}
export interface Topic_Subscription {
    Endpoint: AWSStringProperty;
    Protocol: AWSStringProperty;
}
