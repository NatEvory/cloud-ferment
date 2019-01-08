import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PolicyPrincipalAttachment extends AWSResource<PolicyPrincipalAttachment_ResourceProperties> {
    constructor(name: string, properties: PolicyPrincipalAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface PolicyPrincipalAttachment_ResourceProperties extends AWSResourceProperties {
    PolicyName: AWSStringProperty;
    Principal: AWSStringProperty;
}
