import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class SubnetGroup extends AWSResource<SubnetGroup_ResourceProperties> {
    constructor(name: string, properties: SubnetGroup_ResourceProperties, dependsOn?: string[]);
}
export interface SubnetGroup_ResourceProperties extends AWSResourceProperties {
    CacheSubnetGroupName?: AWSStringProperty;
    Description: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
}
