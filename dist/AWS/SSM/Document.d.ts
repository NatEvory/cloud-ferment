import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Document extends AWSResource<Document_ResourceProperties> {
    constructor(name: string, properties: Document_ResourceProperties);
}
export interface Document_ResourceProperties extends AWSResourceProperties {
    Content: any;
    DocumentType?: AWSStringProperty;
    Tags?: Tag[];
}
