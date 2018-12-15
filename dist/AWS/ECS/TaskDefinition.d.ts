import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class TaskDefinition extends AWSResource<TaskDefinition_ResourceProperties> {
    constructor(name: string, properties: TaskDefinition_ResourceProperties);
}
export interface TaskDefinition_ResourceProperties extends AWSResourceProperties {
    ContainerDefinitions?: TaskDefinition_ContainerDefinition[];
    Cpu?: AWSStringProperty;
    ExecutionRoleArn?: AWSStringProperty;
    Family?: AWSStringProperty;
    Memory?: AWSStringProperty;
    NetworkMode?: AWSStringProperty;
    PlacementConstraints?: TaskDefinition_TaskDefinitionPlacementConstraint[];
    RequiresCompatibilities?: AWSStringListProperty;
    TaskRoleArn?: AWSStringProperty;
    Volumes?: TaskDefinition_Volume[];
}
export interface TaskDefinition_DockerVolumeConfiguration {
    Autoprovision?: boolean;
    Driver?: AWSStringProperty;
    DriverOpts?: Map<string, AWSStringProperty>;
    Labels?: Map<string, AWSStringProperty>;
    Scope?: AWSStringProperty;
}
export interface TaskDefinition_ContainerDefinition {
    Command?: AWSStringListProperty;
    Cpu?: number;
    DisableNetworking?: boolean;
    DnsSearchDomains?: AWSStringListProperty;
    DnsServers?: AWSStringListProperty;
    DockerLabels?: Map<string, AWSStringProperty>;
    DockerSecurityOptions?: AWSStringListProperty;
    EntryPoint?: AWSStringListProperty;
    Environment?: TaskDefinition_KeyValuePair[];
    Essential?: boolean;
    ExtraHosts?: TaskDefinition_HostEntry[];
    HealthCheck?: TaskDefinition_HealthCheck;
    Hostname?: AWSStringProperty;
    Image?: AWSStringProperty;
    Links?: AWSStringListProperty;
    LinuxParameters?: TaskDefinition_LinuxParameters;
    LogConfiguration?: TaskDefinition_LogConfiguration;
    Memory?: number;
    MemoryReservation?: number;
    MountPoints?: TaskDefinition_MountPoint[];
    Name?: AWSStringProperty;
    PortMappings?: TaskDefinition_PortMapping[];
    Privileged?: boolean;
    ReadonlyRootFilesystem?: boolean;
    RepositoryCredentials?: TaskDefinition_RepositoryCredentials;
    Ulimits?: TaskDefinition_Ulimit[];
    User?: AWSStringProperty;
    VolumesFrom?: TaskDefinition_VolumeFrom[];
    WorkingDirectory?: AWSStringProperty;
}
export interface TaskDefinition_LogConfiguration {
    LogDriver: AWSStringProperty;
    Options?: Map<string, AWSStringProperty>;
}
export interface TaskDefinition_Device {
    ContainerPath?: AWSStringProperty;
    HostPath: AWSStringProperty;
    Permissions?: AWSStringListProperty;
}
export interface TaskDefinition_KeyValuePair {
    Name?: AWSStringProperty;
    Value?: AWSStringProperty;
}
export interface TaskDefinition_MountPoint {
    ContainerPath?: AWSStringProperty;
    ReadOnly?: boolean;
    SourceVolume?: AWSStringProperty;
}
export interface TaskDefinition_VolumeFrom {
    ReadOnly?: boolean;
    SourceContainer?: AWSStringProperty;
}
export interface TaskDefinition_HostEntry {
    Hostname: AWSStringProperty;
    IpAddress: AWSStringProperty;
}
export interface TaskDefinition_KernelCapabilities {
    Add?: AWSStringListProperty;
    Drop?: AWSStringListProperty;
}
export interface TaskDefinition_TaskDefinitionPlacementConstraint {
    Expression?: AWSStringProperty;
    Type: AWSStringProperty;
}
export interface TaskDefinition_Volume {
    DockerVolumeConfiguration?: TaskDefinition_DockerVolumeConfiguration;
    Host?: TaskDefinition_HostVolumeProperties;
    Name?: AWSStringProperty;
}
export interface TaskDefinition_HealthCheck {
    Command: AWSStringListProperty;
    Interval?: number;
    Retries?: number;
    StartPeriod?: number;
    Timeout?: number;
}
export interface TaskDefinition_PortMapping {
    ContainerPort?: number;
    HostPort?: number;
    Protocol?: AWSStringProperty;
}
export interface TaskDefinition_Ulimit {
    HardLimit: number;
    Name: AWSStringProperty;
    SoftLimit: number;
}
export interface TaskDefinition_LinuxParameters {
    Capabilities?: TaskDefinition_KernelCapabilities;
    Devices?: TaskDefinition_Device[];
    InitProcessEnabled?: boolean;
    SharedMemorySize?: number;
    Tmpfs?: TaskDefinition_Tmpfs[];
}
export interface TaskDefinition_HostVolumeProperties {
    SourcePath?: AWSStringProperty;
}
export interface TaskDefinition_Tmpfs {
    ContainerPath?: AWSStringProperty;
    MountOptions?: AWSStringListProperty;
    Size?: number;
}
export interface TaskDefinition_RepositoryCredentials {
    CredentialsParameter?: AWSStringProperty;
}
