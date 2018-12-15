import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class HttpNamespace extends AWSResource<HttpNamespace_ResourceProperties> {
    constructor(name: string, properties: HttpNamespace_ResourceProperties);
}
export interface HttpNamespace_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    Name: AWSStringProperty;
}
