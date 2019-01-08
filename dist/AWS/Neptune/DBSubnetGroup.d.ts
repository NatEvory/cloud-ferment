import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DBSubnetGroup extends AWSResource<DBSubnetGroup_ResourceProperties> {
    constructor(name: string, properties: DBSubnetGroup_ResourceProperties, dependsOn?: string[]);
}
export interface DBSubnetGroup_ResourceProperties extends AWSResourceProperties {
    DBSubnetGroupName?: AWSStringProperty;
    DBSubnetGroupDescription: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
    Tags?: Tag[];
}
