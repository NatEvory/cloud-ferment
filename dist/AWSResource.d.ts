import { CloudFormationFunctionResult } from './CloudFormationFunctionResult';
export interface AWSResourceProperties {
}
export declare type AWSStringProperty = CloudFormationFunctionResult | string;
export declare type AWSStringListProperty = (CloudFormationFunctionResult | string)[];
export interface Tag {
    key?: string;
    value?: string;
}
export declare class AWSResource<T extends AWSResourceProperties> {
    name: string;
    private resourceProperties;
    private typeName;
    constructor(name: string, resourceProperties: T, typeName: string);
    getResourceProperties(): T;
    getTypeName(): string;
}
