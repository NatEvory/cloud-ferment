import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ResolverRuleAssociation extends AWSResource<ResolverRuleAssociation_ResourceProperties> {
    constructor(name: string, properties: ResolverRuleAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface ResolverRuleAssociation_ResourceProperties extends AWSResourceProperties {
    VPCId: AWSStringProperty;
    ResolverRuleId: AWSStringProperty;
    Name?: AWSStringProperty;
}
