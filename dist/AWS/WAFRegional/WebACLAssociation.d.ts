import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class WebACLAssociation extends AWSResource<WebACLAssociation_ResourceProperties> {
    constructor(name: string, properties: WebACLAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface WebACLAssociation_ResourceProperties extends AWSResourceProperties {
    ResourceArn: AWSStringProperty;
    WebACLId: AWSStringProperty;
}
