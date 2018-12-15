import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Project extends AWSResource<Project_ResourceProperties> {
    constructor(name: string, properties: Project_ResourceProperties);
}
export interface Project_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    VpcConfig?: Project_VpcConfig;
    SecondarySources?: Project_Source[];
    EncryptionKey?: AWSStringProperty;
    Triggers?: Project_ProjectTriggers;
    SecondaryArtifacts?: Project_Artifacts[];
    Source: Project_Source;
    Name?: AWSStringProperty;
    Artifacts: Project_Artifacts;
    BadgeEnabled?: boolean;
    LogsConfig?: Project_LogsConfig;
    ServiceRole: AWSStringProperty;
    QueuedTimeoutInMinutes?: number;
    Environment: Project_Environment;
    Tags?: Tag[];
    TimeoutInMinutes?: number;
    Cache?: Project_ProjectCache;
}
export interface Project_Artifacts {
    Path?: AWSStringProperty;
    Type: AWSStringProperty;
    ArtifactIdentifier?: AWSStringProperty;
    OverrideArtifactName?: boolean;
    Packaging?: AWSStringProperty;
    EncryptionDisabled?: boolean;
    Location?: AWSStringProperty;
    Name?: AWSStringProperty;
    NamespaceType?: AWSStringProperty;
}
export interface Project_LogsConfig {
    CloudWatchLogs?: Project_CloudWatchLogsConfig;
    S3Logs?: Project_S3LogsConfig;
}
export interface Project_SourceAuth {
    Type: AWSStringProperty;
    Resource?: AWSStringProperty;
}
export interface Project_Environment {
    Type: AWSStringProperty;
    EnvironmentVariables?: Project_EnvironmentVariable[];
    PrivilegedMode?: boolean;
    Image: AWSStringProperty;
    ComputeType: AWSStringProperty;
    Certificate?: AWSStringProperty;
}
export interface Project_CloudWatchLogsConfig {
    Status: AWSStringProperty;
    GroupName?: AWSStringProperty;
    StreamName?: AWSStringProperty;
}
export interface Project_ProjectCache {
    Type: AWSStringProperty;
    Location?: AWSStringProperty;
}
export interface Project_VpcConfig {
    Subnets?: AWSStringListProperty;
    VpcId?: AWSStringProperty;
    SecurityGroupIds?: AWSStringListProperty;
}
export interface Project_ProjectTriggers {
    Webhook?: boolean;
}
export interface Project_EnvironmentVariable {
    Type?: AWSStringProperty;
    Value: AWSStringProperty;
    Name: AWSStringProperty;
}
export interface Project_S3LogsConfig {
    Status: AWSStringProperty;
    Location?: AWSStringProperty;
}
export interface Project_Source {
    Type: AWSStringProperty;
    ReportBuildStatus?: boolean;
    Auth?: Project_SourceAuth;
    SourceIdentifier?: AWSStringProperty;
    BuildSpec?: AWSStringProperty;
    GitCloneDepth?: number;
    InsecureSsl?: boolean;
    Location?: AWSStringProperty;
}
