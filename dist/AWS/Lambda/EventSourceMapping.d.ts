import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EventSourceMapping extends AWSResource<EventSourceMapping_ResourceProperties> {
    constructor(name: string, properties: EventSourceMapping_ResourceProperties, dependsOn?: string[]);
}
export interface EventSourceMapping_ResourceProperties extends AWSResourceProperties {
    BatchSize?: number;
    Enabled?: boolean;
    EventSourceArn: AWSStringProperty;
    FunctionName: AWSStringProperty;
    StartingPosition?: AWSStringProperty;
}
