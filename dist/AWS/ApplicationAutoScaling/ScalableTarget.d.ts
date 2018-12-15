import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ScalableTarget extends AWSResource<ScalableTarget_ResourceProperties> {
    constructor(name: string, properties: ScalableTarget_ResourceProperties);
}
export interface ScalableTarget_ResourceProperties extends AWSResourceProperties {
    MaxCapacity: number;
    MinCapacity: number;
    ResourceId: AWSStringProperty;
    RoleARN: AWSStringProperty;
    ScalableDimension: AWSStringProperty;
    ScheduledActions?: ScalableTarget_ScheduledAction[];
    ServiceNamespace: AWSStringProperty;
}
export interface ScalableTarget_ScheduledAction {
    EndTime?: Date;
    ScalableTargetAction?: ScalableTarget_ScalableTargetAction;
    Schedule: AWSStringProperty;
    ScheduledActionName: AWSStringProperty;
    StartTime?: Date;
}
export interface ScalableTarget_ScalableTargetAction {
    MaxCapacity?: number;
    MinCapacity?: number;
}
