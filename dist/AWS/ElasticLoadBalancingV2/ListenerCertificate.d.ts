import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ListenerCertificate extends AWSResource<ListenerCertificate_ResourceProperties> {
    constructor(name: string, properties: ListenerCertificate_ResourceProperties, dependsOn?: string[]);
}
export interface ListenerCertificate_ResourceProperties extends AWSResourceProperties {
    Certificates: ListenerCertificate_Certificate[];
    ListenerArn: AWSStringProperty;
}
export interface ListenerCertificate_Certificate {
    CertificateArn?: AWSStringProperty;
}
