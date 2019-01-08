import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DomainName extends AWSResource<DomainName_ResourceProperties> {
    constructor(name: string, properties: DomainName_ResourceProperties, dependsOn?: string[]);
}
export interface DomainName_ResourceProperties extends AWSResourceProperties {
    CertificateArn?: AWSStringProperty;
    DomainName: AWSStringProperty;
    EndpointConfiguration?: DomainName_EndpointConfiguration;
    RegionalCertificateArn?: AWSStringProperty;
}
export interface DomainName_EndpointConfiguration {
    Types?: AWSStringListProperty;
}
