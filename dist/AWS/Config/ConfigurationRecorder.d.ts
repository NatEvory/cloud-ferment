import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ConfigurationRecorder extends AWSResource<ConfigurationRecorder_ResourceProperties> {
    constructor(name: string, properties: ConfigurationRecorder_ResourceProperties);
}
export interface ConfigurationRecorder_ResourceProperties extends AWSResourceProperties {
    Name?: AWSStringProperty;
    RecordingGroup?: ConfigurationRecorder_RecordingGroup;
    RoleARN: AWSStringProperty;
}
export interface ConfigurationRecorder_RecordingGroup {
    AllSupported?: boolean;
    IncludeGlobalResourceTypes?: boolean;
    ResourceTypes?: AWSStringListProperty;
}
