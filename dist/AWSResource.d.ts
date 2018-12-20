import { CloudFormationFunctionResult } from './CloudFormationFunctionResult';
export interface AWSResourceProperties {
}
export declare type AWSStringProperty = CloudFormationFunctionResult | string;
export declare type AWSStringListProperty = (CloudFormationFunctionResult | string)[] | CloudFormationFunctionResult;
export interface Tag {
    Key?: string;
    Value?: string;
}
export declare class AWSResource<T extends AWSResourceProperties> {
    name: string;
    private resourceProperties;
    private typeName;
    constructor(name: string, resourceProperties: T, typeName: string);
    getResourceProperties(): T;
    getTypeName(): string;
}
