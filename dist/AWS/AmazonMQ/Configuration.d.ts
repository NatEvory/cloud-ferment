import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Configuration extends AWSResource<Configuration_ResourceProperties> {
    constructor(name: string, properties: Configuration_ResourceProperties);
}
export interface Configuration_ResourceProperties extends AWSResourceProperties {
    EngineVersion: AWSStringProperty;
    Description?: AWSStringProperty;
    EngineType: AWSStringProperty;
    Data: AWSStringProperty;
    Name: AWSStringProperty;
}
