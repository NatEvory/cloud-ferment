import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ReplicationSubnetGroup extends AWSResource<ReplicationSubnetGroup_ResourceProperties> {
    constructor(name: string, properties: ReplicationSubnetGroup_ResourceProperties);
}
export interface ReplicationSubnetGroup_ResourceProperties extends AWSResourceProperties {
    ReplicationSubnetGroupDescription: AWSStringProperty;
    ReplicationSubnetGroupIdentifier?: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
    Tags?: Tag[];
}
