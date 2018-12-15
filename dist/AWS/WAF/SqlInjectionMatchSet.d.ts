import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SqlInjectionMatchSet extends AWSResource<SqlInjectionMatchSet_ResourceProperties> {
    constructor(name: string, properties: SqlInjectionMatchSet_ResourceProperties);
}
export interface SqlInjectionMatchSet_ResourceProperties extends AWSResourceProperties {
    Name: AWSStringProperty;
    SqlInjectionMatchTuples?: SqlInjectionMatchSet_SqlInjectionMatchTuple[];
}
export interface SqlInjectionMatchSet_SqlInjectionMatchTuple {
    FieldToMatch: SqlInjectionMatchSet_FieldToMatch;
    TextTransformation: AWSStringProperty;
}
export interface SqlInjectionMatchSet_FieldToMatch {
    Data?: AWSStringProperty;
    Type: AWSStringProperty;
}
