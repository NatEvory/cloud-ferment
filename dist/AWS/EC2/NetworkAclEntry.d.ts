import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NetworkAclEntry extends AWSResource<NetworkAclEntry_ResourceProperties> {
    constructor(name: string, properties: NetworkAclEntry_ResourceProperties);
}
export interface NetworkAclEntry_ResourceProperties extends AWSResourceProperties {
    CidrBlock: AWSStringProperty;
    Egress?: boolean;
    Icmp?: NetworkAclEntry_Icmp;
    Ipv6CidrBlock?: AWSStringProperty;
    NetworkAclId: AWSStringProperty;
    PortRange?: NetworkAclEntry_PortRange;
    Protocol: number;
    RuleAction: AWSStringProperty;
    RuleNumber: number;
}
export interface NetworkAclEntry_Icmp {
    Code?: number;
    Type?: number;
}
export interface NetworkAclEntry_PortRange {
    From?: number;
    To?: number;
}
