import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ResolverEndpoint extends AWSResource<ResolverEndpoint_ResourceProperties> {
    constructor(name: string, properties: ResolverEndpoint_ResourceProperties, dependsOn?: string[]);
}
export interface ResolverEndpoint_ResourceProperties extends AWSResourceProperties {
    IpAddresses: ResolverEndpoint_IpAddressRequest[];
    Direction: AWSStringProperty;
    SecurityGroupIds: AWSStringListProperty;
    Tags?: Tag[];
    Name?: AWSStringProperty;
}
export interface ResolverEndpoint_IpAddressRequest {
    Ip?: AWSStringProperty;
    SubnetId: AWSStringProperty;
}
