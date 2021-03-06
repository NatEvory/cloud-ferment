import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class CustomResource extends AWSResource<CustomResource_ResourceProperties> {
    constructor(name: string, properties: CustomResource_ResourceProperties, dependsOn?: string[]);
}
export interface CustomResource_ResourceProperties extends AWSResourceProperties {
    ServiceToken: AWSStringProperty;
}
