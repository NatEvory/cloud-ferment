import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DirectoryConfig extends AWSResource<DirectoryConfig_ResourceProperties> {
    constructor(name: string, properties: DirectoryConfig_ResourceProperties);
}
export interface DirectoryConfig_ResourceProperties extends AWSResourceProperties {
    OrganizationalUnitDistinguishedNames: AWSStringListProperty;
    ServiceAccountCredentials: DirectoryConfig_ServiceAccountCredentials;
    DirectoryName: AWSStringProperty;
}
export interface DirectoryConfig_ServiceAccountCredentials {
    AccountName: AWSStringProperty;
    AccountPassword: AWSStringProperty;
}
