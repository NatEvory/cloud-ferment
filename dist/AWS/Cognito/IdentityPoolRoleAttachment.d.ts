import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class IdentityPoolRoleAttachment extends AWSResource<IdentityPoolRoleAttachment_ResourceProperties> {
    constructor(name: string, properties: IdentityPoolRoleAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface IdentityPoolRoleAttachment_ResourceProperties extends AWSResourceProperties {
    RoleMappings?: any;
    IdentityPoolId: AWSStringProperty;
    Roles?: any;
}
export interface IdentityPoolRoleAttachment_RulesConfigurationType {
    Rules: IdentityPoolRoleAttachment_MappingRule[];
}
export interface IdentityPoolRoleAttachment_RoleMapping {
    Type: AWSStringProperty;
    AmbiguousRoleResolution?: AWSStringProperty;
    RulesConfiguration?: IdentityPoolRoleAttachment_RulesConfigurationType;
}
export interface IdentityPoolRoleAttachment_MappingRule {
    MatchType: AWSStringProperty;
    Value: AWSStringProperty;
    Claim: AWSStringProperty;
    RoleARN: AWSStringProperty;
}
