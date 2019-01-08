import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class EventSubscription extends AWSResource<EventSubscription_ResourceProperties> {
    constructor(name: string, properties: EventSubscription_ResourceProperties, dependsOn?: string[]);
}
export interface EventSubscription_ResourceProperties extends AWSResourceProperties {
    Enabled?: boolean;
    EventCategories?: AWSStringListProperty;
    SnsTopicArn: AWSStringProperty;
    SourceIds?: AWSStringListProperty;
    SourceType?: AWSStringProperty;
}
