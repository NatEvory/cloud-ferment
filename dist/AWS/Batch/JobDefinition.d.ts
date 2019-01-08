import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class JobDefinition extends AWSResource<JobDefinition_ResourceProperties> {
    constructor(name: string, properties: JobDefinition_ResourceProperties, dependsOn?: string[]);
}
export interface JobDefinition_ResourceProperties extends AWSResourceProperties {
    Type: AWSStringProperty;
    Parameters?: any;
    NodeProperties?: JobDefinition_NodeProperties;
    Timeout?: JobDefinition_Timeout;
    ContainerProperties?: JobDefinition_ContainerProperties;
    JobDefinitionName?: AWSStringProperty;
    RetryStrategy?: JobDefinition_RetryStrategy;
}
export interface JobDefinition_NodeProperties {
    MainNode: number;
    NodeRangeProperties: JobDefinition_NodeRangeProperty[];
    NumNodes: number;
}
export interface JobDefinition_Volumes {
    Host?: JobDefinition_VolumesHost;
    Name?: AWSStringProperty;
}
export interface JobDefinition_RetryStrategy {
    Attempts?: number;
}
export interface JobDefinition_ContainerProperties {
    User?: AWSStringProperty;
    Memory: number;
    Privileged?: boolean;
    JobRoleArn?: AWSStringProperty;
    ReadonlyRootFilesystem?: boolean;
    Vcpus: number;
    Image: AWSStringProperty;
    MountPoints?: JobDefinition_MountPoints[];
    Volumes?: JobDefinition_Volumes[];
    Command?: AWSStringListProperty;
    Environment?: JobDefinition_Environment[];
    Ulimits?: JobDefinition_Ulimit[];
    InstanceType?: AWSStringProperty;
}
export interface JobDefinition_Timeout {
    AttemptDurationSeconds?: number;
}
export interface JobDefinition_NodeRangeProperty {
    Container?: JobDefinition_ContainerProperties;
    TargetNodes: AWSStringProperty;
}
export interface JobDefinition_MountPoints {
    ReadOnly?: boolean;
    SourceVolume?: AWSStringProperty;
    ContainerPath?: AWSStringProperty;
}
export interface JobDefinition_Environment {
    Value?: AWSStringProperty;
    Name?: AWSStringProperty;
}
export interface JobDefinition_Ulimit {
    SoftLimit: number;
    HardLimit: number;
    Name: AWSStringProperty;
}
export interface JobDefinition_VolumesHost {
    SourcePath?: AWSStringProperty;
}
