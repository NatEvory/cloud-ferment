import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ManagedPolicy extends AWSResource<ManagedPolicy_ResourceProperties> {
    constructor(name: string, properties: ManagedPolicy_ResourceProperties);
}
export interface ManagedPolicy_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    Groups?: AWSStringListProperty;
    ManagedPolicyName?: AWSStringProperty;
    Path?: AWSStringProperty;
    PolicyDocument: any;
    Roles?: AWSStringListProperty;
    Users?: AWSStringListProperty;
}
