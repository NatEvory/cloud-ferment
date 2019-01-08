import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class LifecycleHook extends AWSResource<LifecycleHook_ResourceProperties> {
    constructor(name: string, properties: LifecycleHook_ResourceProperties, dependsOn?: string[]);
}
export interface LifecycleHook_ResourceProperties extends AWSResourceProperties {
    AutoScalingGroupName: AWSStringProperty;
    DefaultResult?: AWSStringProperty;
    HeartbeatTimeout?: number;
    LifecycleHookName?: AWSStringProperty;
    LifecycleTransition: AWSStringProperty;
    NotificationMetadata?: AWSStringProperty;
    NotificationTargetARN?: AWSStringProperty;
    RoleARN?: AWSStringProperty;
}
