import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ClusterSubnetGroup extends AWSResource<ClusterSubnetGroup_ResourceProperties> {
    constructor(name: string, properties: ClusterSubnetGroup_ResourceProperties, dependsOn?: string[]);
}
export interface ClusterSubnetGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
    Tags?: Tag[];
}
