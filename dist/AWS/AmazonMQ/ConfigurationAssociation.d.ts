import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ConfigurationAssociation extends AWSResource<ConfigurationAssociation_ResourceProperties> {
    constructor(name: string, properties: ConfigurationAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface ConfigurationAssociation_ResourceProperties extends AWSResourceProperties {
    Broker: AWSStringProperty;
    Configuration: ConfigurationAssociation_ConfigurationId;
}
export interface ConfigurationAssociation_ConfigurationId {
    Revision: number;
    Id: AWSStringProperty;
}
