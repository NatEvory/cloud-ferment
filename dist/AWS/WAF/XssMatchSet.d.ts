import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class XssMatchSet extends AWSResource<XssMatchSet_ResourceProperties> {
    constructor(name: string, properties: XssMatchSet_ResourceProperties, dependsOn?: string[]);
}
export interface XssMatchSet_ResourceProperties extends AWSResourceProperties {
    Name: AWSStringProperty;
    XssMatchTuples: XssMatchSet_XssMatchTuple[];
}
export interface XssMatchSet_FieldToMatch {
    Data?: AWSStringProperty;
    Type: AWSStringProperty;
}
export interface XssMatchSet_XssMatchTuple {
    FieldToMatch: XssMatchSet_FieldToMatch;
    TextTransformation: AWSStringProperty;
}
