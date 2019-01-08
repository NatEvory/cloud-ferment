import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ClusterSecurityGroupIngress extends AWSResource<ClusterSecurityGroupIngress_ResourceProperties> {
    constructor(name: string, properties: ClusterSecurityGroupIngress_ResourceProperties, dependsOn?: string[]);
}
export interface ClusterSecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
    CIDRIP?: AWSStringProperty;
    ClusterSecurityGroupName: AWSStringProperty;
    EC2SecurityGroupName?: AWSStringProperty;
    EC2SecurityGroupOwnerId?: AWSStringProperty;
}
