import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class LifecyclePolicy extends AWSResource<LifecyclePolicy_ResourceProperties> {
    constructor(name: string, properties: LifecyclePolicy_ResourceProperties);
}
export interface LifecyclePolicy_ResourceProperties extends AWSResourceProperties {
    ExecutionRoleArn?: AWSStringProperty;
    Description?: AWSStringProperty;
    State?: AWSStringProperty;
    PolicyDetails?: LifecyclePolicy_PolicyDetails;
}
export interface LifecyclePolicy_Schedule {
    TagsToAdd?: Tag[];
    CreateRule?: LifecyclePolicy_CreateRule;
    RetainRule?: LifecyclePolicy_RetainRule;
    Name?: AWSStringProperty;
    CopyTags?: boolean;
}
export interface LifecyclePolicy_CreateRule {
    IntervalUnit: AWSStringProperty;
    Times?: AWSStringListProperty;
    Interval: number;
}
export interface LifecyclePolicy_RetainRule {
    Count: number;
}
export interface LifecyclePolicy_PolicyDetails {
    ResourceTypes?: AWSStringListProperty;
    Schedules?: LifecyclePolicy_Schedule[];
    TargetTags?: Tag[];
}
