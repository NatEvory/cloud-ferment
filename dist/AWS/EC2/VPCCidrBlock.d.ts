import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPCCidrBlock extends AWSResource<VPCCidrBlock_ResourceProperties> {
    constructor(name: string, properties: VPCCidrBlock_ResourceProperties, dependsOn?: string[]);
}
export interface VPCCidrBlock_ResourceProperties extends AWSResourceProperties {
    AmazonProvidedIpv6CidrBlock?: boolean;
    CidrBlock?: AWSStringProperty;
    VpcId: AWSStringProperty;
}
