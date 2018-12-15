import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TagOptionAssociation extends AWSResource<TagOptionAssociation_ResourceProperties> {
    constructor(name: string, properties: TagOptionAssociation_ResourceProperties);
}
export interface TagOptionAssociation_ResourceProperties extends AWSResourceProperties {
    TagOptionId: AWSStringProperty;
    ResourceId: AWSStringProperty;
}
