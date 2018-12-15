import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPNConnection extends AWSResource<VPNConnection_ResourceProperties> {
    constructor(name: string, properties: VPNConnection_ResourceProperties);
}
export interface VPNConnection_ResourceProperties extends AWSResourceProperties {
    CustomerGatewayId: AWSStringProperty;
    StaticRoutesOnly?: boolean;
    Tags?: Tag[];
    Type: AWSStringProperty;
    VpnGatewayId: AWSStringProperty;
    VpnTunnelOptionsSpecifications?: VPNConnection_VpnTunnelOptionsSpecification[];
}
export interface VPNConnection_VpnTunnelOptionsSpecification {
    PreSharedKey?: AWSStringProperty;
    TunnelInsideCidr?: AWSStringProperty;
}
