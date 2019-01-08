import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DocumentationVersion extends AWSResource<DocumentationVersion_ResourceProperties> {
    constructor(name: string, properties: DocumentationVersion_ResourceProperties, dependsOn?: string[]);
}
export interface DocumentationVersion_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    DocumentationVersion: AWSStringProperty;
    RestApiId: AWSStringProperty;
}
