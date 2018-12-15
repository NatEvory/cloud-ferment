import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPC extends AWSResource<VPC_ResourceProperties> {
    constructor(name: string, properties: VPC_ResourceProperties);
}
export interface VPC_ResourceProperties extends AWSResourceProperties {
    CidrBlock: AWSStringProperty;
    EnableDnsHostnames?: boolean;
    EnableDnsSupport?: boolean;
    InstanceTenancy?: AWSStringProperty;
    Tags?: Tag[];
}
