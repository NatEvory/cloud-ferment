import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Cluster extends AWSResource<Cluster_ResourceProperties> {
    constructor(name: string, properties: Cluster_ResourceProperties, dependsOn?: string[]);
}
export interface Cluster_ResourceProperties extends AWSResourceProperties {
    ClusterName?: AWSStringProperty;
}
