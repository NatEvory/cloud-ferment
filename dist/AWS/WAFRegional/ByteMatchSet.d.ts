import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ByteMatchSet extends AWSResource<ByteMatchSet_ResourceProperties> {
    constructor(name: string, properties: ByteMatchSet_ResourceProperties);
}
export interface ByteMatchSet_ResourceProperties extends AWSResourceProperties {
    ByteMatchTuples?: ByteMatchSet_ByteMatchTuple[];
    Name: AWSStringProperty;
}
export interface ByteMatchSet_ByteMatchTuple {
    TargetString?: AWSStringProperty;
    TargetStringBase64?: AWSStringProperty;
    PositionalConstraint: AWSStringProperty;
    TextTransformation: AWSStringProperty;
    FieldToMatch: ByteMatchSet_FieldToMatch;
}
export interface ByteMatchSet_FieldToMatch {
    Type: AWSStringProperty;
    Data?: AWSStringProperty;
}
