import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ResolverRule extends AWSResource<ResolverRule_ResourceProperties> {
    constructor(name: string, properties: ResolverRule_ResourceProperties);
}
export interface ResolverRule_ResourceProperties extends AWSResourceProperties {
    ResolverEndpointId?: AWSStringProperty;
    DomainName: AWSStringProperty;
    RuleType: AWSStringProperty;
    TargetIps?: ResolverRule_TargetAddress[];
    Tags?: Tag[];
    Name?: AWSStringProperty;
}
export interface ResolverRule_TargetAddress {
    Ip: AWSStringProperty;
    Port: AWSStringProperty;
}
