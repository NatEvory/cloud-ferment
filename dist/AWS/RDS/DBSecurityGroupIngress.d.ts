import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBSecurityGroupIngress extends AWSResource<DBSecurityGroupIngress_ResourceProperties> {
    constructor(name: string, properties: DBSecurityGroupIngress_ResourceProperties, dependsOn?: string[]);
}
export interface DBSecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
    CIDRIP?: AWSStringProperty;
    DBSecurityGroupName: AWSStringProperty;
    EC2SecurityGroupId?: AWSStringProperty;
    EC2SecurityGroupName?: AWSStringProperty;
    EC2SecurityGroupOwnerId?: AWSStringProperty;
}
