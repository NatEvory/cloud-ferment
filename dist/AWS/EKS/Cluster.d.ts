import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Cluster extends AWSResource<Cluster_ResourceProperties> {
    constructor(name: string, properties: Cluster_ResourceProperties, dependsOn?: string[]);
}
export interface Cluster_ResourceProperties extends AWSResourceProperties {
    Version?: AWSStringProperty;
    RoleArn: AWSStringProperty;
    ResourcesVpcConfig: Cluster_ResourcesVpcConfig;
    Name?: AWSStringProperty;
}
export interface Cluster_ResourcesVpcConfig {
    SecurityGroupIds?: AWSStringListProperty;
    SubnetIds: AWSStringListProperty;
}
