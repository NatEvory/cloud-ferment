import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Policy extends AWSResource<Policy_ResourceProperties> {
    constructor(name: string, properties: Policy_ResourceProperties, dependsOn?: string[]);
}
export interface Policy_ResourceProperties extends AWSResourceProperties {
    PolicyDocument: any;
    PolicyName?: AWSStringProperty;
}
