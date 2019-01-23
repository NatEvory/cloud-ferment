import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBClusterParameterGroup extends AWSResource<DBClusterParameterGroup_ResourceProperties> {
    constructor(name: string, properties: DBClusterParameterGroup_ResourceProperties, dependsOn?: string[]);
}
export interface DBClusterParameterGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
    Parameters: any;
    Family: AWSStringProperty;
    Tags?: Tag[];
    Name?: AWSStringProperty;
}
