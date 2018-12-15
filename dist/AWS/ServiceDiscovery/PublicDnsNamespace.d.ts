import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PublicDnsNamespace extends AWSResource<PublicDnsNamespace_ResourceProperties> {
    constructor(name: string, properties: PublicDnsNamespace_ResourceProperties);
}
export interface PublicDnsNamespace_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    Name: AWSStringProperty;
}
