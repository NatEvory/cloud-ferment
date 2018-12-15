import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBSecurityGroup extends AWSResource<DBSecurityGroup_ResourceProperties> {
    constructor(name: string, properties: DBSecurityGroup_ResourceProperties);
}
export interface DBSecurityGroup_ResourceProperties extends AWSResourceProperties {
    DBSecurityGroupIngress: DBSecurityGroup_Ingress[];
    EC2VpcId?: AWSStringProperty;
    GroupDescription: AWSStringProperty;
    Tags?: Tag[];
}
export interface DBSecurityGroup_Ingress {
    CIDRIP?: AWSStringProperty;
    EC2SecurityGroupId?: AWSStringProperty;
    EC2SecurityGroupName?: AWSStringProperty;
    EC2SecurityGroupOwnerId?: AWSStringProperty;
}
