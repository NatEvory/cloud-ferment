import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ConfigurationTemplate extends AWSResource<ConfigurationTemplate_ResourceProperties> {
    constructor(name: string, properties: ConfigurationTemplate_ResourceProperties, dependsOn?: string[]);
}
export interface ConfigurationTemplate_ResourceProperties extends AWSResourceProperties {
    ApplicationName: AWSStringProperty;
    Description?: AWSStringProperty;
    EnvironmentId?: AWSStringProperty;
    OptionSettings?: ConfigurationTemplate_ConfigurationOptionSetting[];
    PlatformArn?: AWSStringProperty;
    SolutionStackName?: AWSStringProperty;
    SourceConfiguration?: ConfigurationTemplate_SourceConfiguration;
}
export interface ConfigurationTemplate_SourceConfiguration {
    ApplicationName: AWSStringProperty;
    TemplateName: AWSStringProperty;
}
export interface ConfigurationTemplate_ConfigurationOptionSetting {
    Namespace: AWSStringProperty;
    OptionName: AWSStringProperty;
    ResourceName?: AWSStringProperty;
    Value?: AWSStringProperty;
}
