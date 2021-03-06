import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class CloudFormationProvisionedProduct extends AWSResource<CloudFormationProvisionedProduct_ResourceProperties> {
    constructor(name: string, properties: CloudFormationProvisionedProduct_ResourceProperties, dependsOn?: string[]);
}
export interface CloudFormationProvisionedProduct_ResourceProperties extends AWSResourceProperties {
    PathId?: AWSStringProperty;
    ProvisioningParameters?: CloudFormationProvisionedProduct_ProvisioningParameter[];
    ProductName?: AWSStringProperty;
    ProvisioningArtifactName?: AWSStringProperty;
    NotificationArns?: AWSStringListProperty;
    AcceptLanguage?: AWSStringProperty;
    ProductId?: AWSStringProperty;
    Tags?: Tag[];
    ProvisionedProductName?: AWSStringProperty;
    ProvisioningArtifactId?: AWSStringProperty;
}
export interface CloudFormationProvisionedProduct_ProvisioningParameter {
    Value?: AWSStringProperty;
    Key?: AWSStringProperty;
}
