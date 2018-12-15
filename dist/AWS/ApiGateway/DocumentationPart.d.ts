import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DocumentationPart extends AWSResource<DocumentationPart_ResourceProperties> {
    constructor(name: string, properties: DocumentationPart_ResourceProperties);
}
export interface DocumentationPart_ResourceProperties extends AWSResourceProperties {
    Location: DocumentationPart_Location;
    Properties: AWSStringProperty;
    RestApiId: AWSStringProperty;
}
export interface DocumentationPart_Location {
    Method?: AWSStringProperty;
    Name?: AWSStringProperty;
    Path?: AWSStringProperty;
    StatusCode?: AWSStringProperty;
    Type?: AWSStringProperty;
}
