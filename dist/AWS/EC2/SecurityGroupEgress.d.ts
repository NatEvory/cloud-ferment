import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SecurityGroupEgress extends AWSResource<SecurityGroupEgress_ResourceProperties> {
    constructor(name: string, properties: SecurityGroupEgress_ResourceProperties, dependsOn?: string[]);
}
export interface SecurityGroupEgress_ResourceProperties extends AWSResourceProperties {
    CidrIp?: AWSStringProperty;
    CidrIpv6?: AWSStringProperty;
    Description?: AWSStringProperty;
    DestinationPrefixListId?: AWSStringProperty;
    DestinationSecurityGroupId?: AWSStringProperty;
    FromPort?: number;
    GroupId: AWSStringProperty;
    IpProtocol: AWSStringProperty;
    ToPort?: number;
}
