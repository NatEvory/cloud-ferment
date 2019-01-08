import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Database extends AWSResource<Database_ResourceProperties> {
    constructor(name: string, properties: Database_ResourceProperties, dependsOn?: string[]);
}
export interface Database_ResourceProperties extends AWSResourceProperties {
    DatabaseInput: Database_DatabaseInput;
    CatalogId: AWSStringProperty;
}
export interface Database_DatabaseInput {
    LocationUri?: AWSStringProperty;
    Description?: AWSStringProperty;
    Parameters?: any;
    Name?: AWSStringProperty;
}
