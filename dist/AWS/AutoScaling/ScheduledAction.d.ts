import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ScheduledAction extends AWSResource<ScheduledAction_ResourceProperties> {
    constructor(name: string, properties: ScheduledAction_ResourceProperties, dependsOn?: string[]);
}
export interface ScheduledAction_ResourceProperties extends AWSResourceProperties {
    AutoScalingGroupName: AWSStringProperty;
    DesiredCapacity?: number;
    EndTime?: AWSStringProperty;
    MaxSize?: number;
    MinSize?: number;
    Recurrence?: AWSStringProperty;
    StartTime?: AWSStringProperty;
}
