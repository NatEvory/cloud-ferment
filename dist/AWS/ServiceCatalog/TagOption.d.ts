import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TagOption extends AWSResource<TagOption_ResourceProperties> {
    constructor(name: string, properties: TagOption_ResourceProperties);
}
export interface TagOption_ResourceProperties extends AWSResourceProperties {
    Active?: boolean;
    Value: AWSStringProperty;
    Key: AWSStringProperty;
}
