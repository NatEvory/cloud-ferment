import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class CloudFormationProduct extends AWSResource<CloudFormationProduct_ResourceProperties> {
    constructor(name: string, properties: CloudFormationProduct_ResourceProperties, dependsOn?: string[]);
}
export interface CloudFormationProduct_ResourceProperties extends AWSResourceProperties {
    Owner: AWSStringProperty;
    SupportDescription?: AWSStringProperty;
    Description?: AWSStringProperty;
    Distributor?: AWSStringProperty;
    SupportEmail?: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    SupportUrl?: AWSStringProperty;
    Tags?: Tag[];
    Name: AWSStringProperty;
    ProvisioningArtifactParameters: CloudFormationProduct_ProvisioningArtifactProperties[];
}
export interface CloudFormationProduct_ProvisioningArtifactProperties {
    Description?: AWSStringProperty;
    Info: any;
    Name?: AWSStringProperty;
}
