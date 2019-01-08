import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Policy extends AWSResource<Policy_ResourceProperties> {
    constructor(name: string, properties: Policy_ResourceProperties, dependsOn?: string[]);
}
export interface Policy_ResourceProperties extends AWSResourceProperties {
    Groups?: AWSStringListProperty;
    PolicyDocument: any;
    PolicyName: AWSStringProperty;
    Roles?: AWSStringListProperty;
    Users?: AWSStringListProperty;
}
