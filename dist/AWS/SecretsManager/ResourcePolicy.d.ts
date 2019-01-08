import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ResourcePolicy extends AWSResource<ResourcePolicy_ResourceProperties> {
    constructor(name: string, properties: ResourcePolicy_ResourceProperties, dependsOn?: string[]);
}
export interface ResourcePolicy_ResourceProperties extends AWSResourceProperties {
    SecretId: AWSStringProperty;
    ResourcePolicy: any;
}
