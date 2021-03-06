import { Tag, AWSResource, AWSResourceProperties } from '../../AWSResource';
export declare class ResourceGroup extends AWSResource<ResourceGroup_ResourceProperties> {
    constructor(name: string, properties: ResourceGroup_ResourceProperties, dependsOn?: string[]);
}
export interface ResourceGroup_ResourceProperties extends AWSResourceProperties {
    ResourceGroupTags: Tag[];
}
