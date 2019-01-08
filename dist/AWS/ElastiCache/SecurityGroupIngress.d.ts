import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SecurityGroupIngress extends AWSResource<SecurityGroupIngress_ResourceProperties> {
    constructor(name: string, properties: SecurityGroupIngress_ResourceProperties, dependsOn?: string[]);
}
export interface SecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
    CacheSecurityGroupName: AWSStringProperty;
    EC2SecurityGroupName: AWSStringProperty;
    EC2SecurityGroupOwnerId?: AWSStringProperty;
}
