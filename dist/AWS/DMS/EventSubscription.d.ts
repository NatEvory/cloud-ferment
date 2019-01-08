import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class EventSubscription extends AWSResource<EventSubscription_ResourceProperties> {
    constructor(name: string, properties: EventSubscription_ResourceProperties, dependsOn?: string[]);
}
export interface EventSubscription_ResourceProperties extends AWSResourceProperties {
    SourceType?: AWSStringProperty;
    EventCategories?: AWSStringListProperty;
    Enabled?: boolean;
    SubscriptionName?: AWSStringProperty;
    SnsTopicArn: AWSStringProperty;
    SourceIds?: AWSStringListProperty;
    Tags?: Tag[];
}
