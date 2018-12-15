import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SecurityGroupIngress extends AWSResource<SecurityGroupIngress_ResourceProperties> {
    constructor(name: string, properties: SecurityGroupIngress_ResourceProperties);
}
export interface SecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
    CidrIp?: AWSStringProperty;
    CidrIpv6?: AWSStringProperty;
    Description?: AWSStringProperty;
    FromPort?: number;
    GroupId?: AWSStringProperty;
    GroupName?: AWSStringProperty;
    IpProtocol: AWSStringProperty;
    SourcePrefixListId?: AWSStringProperty;
    SourceSecurityGroupId?: AWSStringProperty;
    SourceSecurityGroupName?: AWSStringProperty;
    SourceSecurityGroupOwnerId?: AWSStringProperty;
    ToPort?: number;
}
