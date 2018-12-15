import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class XssMatchSet extends AWSResource<XssMatchSet_ResourceProperties> {
    constructor(name: string, properties: XssMatchSet_ResourceProperties);
}
export interface XssMatchSet_ResourceProperties extends AWSResourceProperties {
    XssMatchTuples?: XssMatchSet_XssMatchTuple[];
    Name: AWSStringProperty;
}
export interface XssMatchSet_XssMatchTuple {
    TextTransformation: AWSStringProperty;
    FieldToMatch: XssMatchSet_FieldToMatch;
}
export interface XssMatchSet_FieldToMatch {
    Type: AWSStringProperty;
    Data?: AWSStringProperty;
}
