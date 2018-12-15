import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Rule extends AWSResource<Rule_ResourceProperties> {
    constructor(name: string, properties: Rule_ResourceProperties);
}
export interface Rule_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    EventPattern?: any;
    Name?: AWSStringProperty;
    RoleArn?: AWSStringProperty;
    ScheduleExpression?: AWSStringProperty;
    State?: AWSStringProperty;
    Targets?: Rule_Target[];
}
export interface Rule_SqsParameters {
    MessageGroupId: AWSStringProperty;
}
export interface Rule_RunCommandParameters {
    RunCommandTargets: Rule_RunCommandTarget[];
}
export interface Rule_Target {
    Arn: AWSStringProperty;
    EcsParameters?: Rule_EcsParameters;
    Id: AWSStringProperty;
    Input?: AWSStringProperty;
    InputPath?: AWSStringProperty;
    InputTransformer?: Rule_InputTransformer;
    KinesisParameters?: Rule_KinesisParameters;
    RoleArn?: AWSStringProperty;
    RunCommandParameters?: Rule_RunCommandParameters;
    SqsParameters?: Rule_SqsParameters;
}
export interface Rule_RunCommandTarget {
    Key: AWSStringProperty;
    Values: AWSStringListProperty;
}
export interface Rule_InputTransformer {
    InputPathsMap?: Map<string, AWSStringProperty>;
    InputTemplate: AWSStringProperty;
}
export interface Rule_KinesisParameters {
    PartitionKeyPath: AWSStringProperty;
}
export interface Rule_EcsParameters {
    TaskCount?: number;
    TaskDefinitionArn: AWSStringProperty;
}
