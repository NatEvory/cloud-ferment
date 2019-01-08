import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EventBusPolicy extends AWSResource<EventBusPolicy_ResourceProperties> {
    constructor(name: string, properties: EventBusPolicy_ResourceProperties, dependsOn?: string[]);
}
export interface EventBusPolicy_ResourceProperties extends AWSResourceProperties {
    Condition?: EventBusPolicy_Condition;
    Action: AWSStringProperty;
    StatementId: AWSStringProperty;
    Principal: AWSStringProperty;
}
export interface EventBusPolicy_Condition {
    Type?: AWSStringProperty;
    Value?: AWSStringProperty;
    Key?: AWSStringProperty;
}
