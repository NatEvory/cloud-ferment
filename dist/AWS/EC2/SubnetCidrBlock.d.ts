import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SubnetCidrBlock extends AWSResource<SubnetCidrBlock_ResourceProperties> {
    constructor(name: string, properties: SubnetCidrBlock_ResourceProperties, dependsOn?: string[]);
}
export interface SubnetCidrBlock_ResourceProperties extends AWSResourceProperties {
    Ipv6CidrBlock: AWSStringProperty;
    SubnetId: AWSStringProperty;
}
