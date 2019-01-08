import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ClusterSecurityGroup extends AWSResource<ClusterSecurityGroup_ResourceProperties> {
    constructor(name: string, properties: ClusterSecurityGroup_ResourceProperties, dependsOn?: string[]);
}
export interface ClusterSecurityGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
    Tags?: Tag[];
}
