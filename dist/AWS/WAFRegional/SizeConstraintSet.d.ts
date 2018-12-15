import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SizeConstraintSet extends AWSResource<SizeConstraintSet_ResourceProperties> {
    constructor(name: string, properties: SizeConstraintSet_ResourceProperties);
}
export interface SizeConstraintSet_ResourceProperties extends AWSResourceProperties {
    SizeConstraints?: SizeConstraintSet_SizeConstraint[];
    Name: AWSStringProperty;
}
export interface SizeConstraintSet_SizeConstraint {
    ComparisonOperator: AWSStringProperty;
    Size: number;
    TextTransformation: AWSStringProperty;
    FieldToMatch: SizeConstraintSet_FieldToMatch;
}
export interface SizeConstraintSet_FieldToMatch {
    Type: AWSStringProperty;
    Data?: AWSStringProperty;
}
