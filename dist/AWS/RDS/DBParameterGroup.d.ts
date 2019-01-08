import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBParameterGroup extends AWSResource<DBParameterGroup_ResourceProperties> {
    constructor(name: string, properties: DBParameterGroup_ResourceProperties, dependsOn?: string[]);
}
export interface DBParameterGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
    Family: AWSStringProperty;
    Parameters?: {
        [key: string]: AWSStringProperty;
    };
    Tags?: Tag[];
}
