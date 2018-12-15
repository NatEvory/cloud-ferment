import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SubscriptionFilter extends AWSResource<SubscriptionFilter_ResourceProperties> {
    constructor(name: string, properties: SubscriptionFilter_ResourceProperties);
}
export interface SubscriptionFilter_ResourceProperties extends AWSResourceProperties {
    DestinationArn: AWSStringProperty;
    FilterPattern: AWSStringProperty;
    LogGroupName: AWSStringProperty;
    RoleArn?: AWSStringProperty;
}
