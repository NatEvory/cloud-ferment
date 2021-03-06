import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Configuration extends AWSResource<Configuration_ResourceProperties> {
    constructor(name: string, properties: Configuration_ResourceProperties, dependsOn?: string[]);
}
export interface Configuration_ResourceProperties extends AWSResourceProperties {
    EngineVersion: AWSStringProperty;
    Description?: AWSStringProperty;
    EngineType: AWSStringProperty;
    Data: AWSStringProperty;
    Tags?: Configuration_TagsEntry[];
    Name: AWSStringProperty;
}
export interface Configuration_TagsEntry {
    Value: AWSStringProperty;
    Key: AWSStringProperty;
}
