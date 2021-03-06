import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ConfigurationSet extends AWSResource<ConfigurationSet_ResourceProperties> {
    constructor(name: string, properties: ConfigurationSet_ResourceProperties, dependsOn?: string[]);
}
export interface ConfigurationSet_ResourceProperties extends AWSResourceProperties {
    Name?: AWSStringProperty;
}
