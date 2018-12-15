import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Certificate extends AWSResource<Certificate_ResourceProperties> {
    constructor(name: string, properties: Certificate_ResourceProperties);
}
export interface Certificate_ResourceProperties extends AWSResourceProperties {
    DomainName: AWSStringProperty;
    DomainValidationOptions?: Certificate_DomainValidationOption[];
    SubjectAlternativeNames?: AWSStringListProperty;
    Tags?: Tag[];
    ValidationMethod?: AWSStringProperty;
}
export interface Certificate_DomainValidationOption {
    DomainName: AWSStringProperty;
    ValidationDomain: AWSStringProperty;
}
