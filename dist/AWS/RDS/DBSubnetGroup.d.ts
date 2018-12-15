import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DBSubnetGroup extends AWSResource<DBSubnetGroup_ResourceProperties> {
    constructor(name: string, properties: DBSubnetGroup_ResourceProperties);
}
export interface DBSubnetGroup_ResourceProperties extends AWSResourceProperties {
    DBSubnetGroupDescription: AWSStringProperty;
    DBSubnetGroupName?: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
    Tags?: Tag[];
}
