import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ClusterParameterGroup extends AWSResource<ClusterParameterGroup_ResourceProperties> {
    constructor(name: string, properties: ClusterParameterGroup_ResourceProperties, dependsOn?: string[]);
}
export interface ClusterParameterGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
    ParameterGroupFamily: AWSStringProperty;
    Parameters?: ClusterParameterGroup_Parameter[];
    Tags?: Tag[];
}
export interface ClusterParameterGroup_Parameter {
    ParameterName: AWSStringProperty;
    ParameterValue: AWSStringProperty;
}
