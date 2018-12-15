import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBClusterParameterGroup extends AWSResource<DBClusterParameterGroup_ResourceProperties> {
    constructor(name: string, properties: DBClusterParameterGroup_ResourceProperties);
}
export interface DBClusterParameterGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
    Family: AWSStringProperty;
    Parameters: any;
    Tags?: Tag[];
}
