import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SqlInjectionMatchSet extends AWSResource<SqlInjectionMatchSet_ResourceProperties> {
    constructor(name: string, properties: SqlInjectionMatchSet_ResourceProperties);
}
export interface SqlInjectionMatchSet_ResourceProperties extends AWSResourceProperties {
    SqlInjectionMatchTuples?: SqlInjectionMatchSet_SqlInjectionMatchTuple[];
    Name: AWSStringProperty;
}
export interface SqlInjectionMatchSet_FieldToMatch {
    Type: AWSStringProperty;
    Data?: AWSStringProperty;
}
export interface SqlInjectionMatchSet_SqlInjectionMatchTuple {
    TextTransformation: AWSStringProperty;
    FieldToMatch: SqlInjectionMatchSet_FieldToMatch;
}
