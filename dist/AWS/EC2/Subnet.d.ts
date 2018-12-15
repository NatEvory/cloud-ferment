import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Subnet extends AWSResource<Subnet_ResourceProperties> {
    constructor(name: string, properties: Subnet_ResourceProperties);
}
export interface Subnet_ResourceProperties extends AWSResourceProperties {
    AssignIpv6AddressOnCreation?: boolean;
    AvailabilityZone?: AWSStringProperty;
    CidrBlock: AWSStringProperty;
    Ipv6CidrBlock?: AWSStringProperty;
    MapPublicIpOnLaunch?: boolean;
    Tags?: Tag[];
    VpcId: AWSStringProperty;
}
