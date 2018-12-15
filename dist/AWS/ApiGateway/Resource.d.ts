import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Resource extends AWSResource<Resource_ResourceProperties> {
    constructor(name: string, properties: Resource_ResourceProperties);
}
export interface Resource_ResourceProperties extends AWSResourceProperties {
    ParentId: AWSStringProperty;
    PathPart: AWSStringProperty;
    RestApiId: AWSStringProperty;
}
