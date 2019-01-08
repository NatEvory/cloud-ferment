import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SubnetNetworkAclAssociation extends AWSResource<SubnetNetworkAclAssociation_ResourceProperties> {
    constructor(name: string, properties: SubnetNetworkAclAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface SubnetNetworkAclAssociation_ResourceProperties extends AWSResourceProperties {
    NetworkAclId: AWSStringProperty;
    SubnetId: AWSStringProperty;
}
