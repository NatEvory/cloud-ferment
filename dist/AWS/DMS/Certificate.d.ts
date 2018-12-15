import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Certificate extends AWSResource<Certificate_ResourceProperties> {
    constructor(name: string, properties: Certificate_ResourceProperties);
}
export interface Certificate_ResourceProperties extends AWSResourceProperties {
    CertificateIdentifier?: AWSStringProperty;
    CertificatePem?: AWSStringProperty;
    CertificateWallet?: AWSStringProperty;
}
