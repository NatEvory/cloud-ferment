import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Subscription extends AWSResource<Subscription_ResourceProperties> {
    constructor(name: string, properties: Subscription_ResourceProperties);
}
export interface Subscription_ResourceProperties extends AWSResourceProperties {
    DeliveryPolicy?: any;
    Endpoint?: AWSStringProperty;
    FilterPolicy?: any;
    Protocol?: AWSStringProperty;
    RawMessageDelivery?: boolean;
    Region?: AWSStringProperty;
    TopicArn?: AWSStringProperty;
}
