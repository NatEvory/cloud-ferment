import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NamedQuery extends AWSResource<NamedQuery_ResourceProperties> {
    constructor(name: string, properties: NamedQuery_ResourceProperties);
}
export interface NamedQuery_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    QueryString: AWSStringProperty;
    Database: AWSStringProperty;
    Name?: AWSStringProperty;
}
