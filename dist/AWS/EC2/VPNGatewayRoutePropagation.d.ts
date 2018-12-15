import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class VPNGatewayRoutePropagation extends AWSResource<VPNGatewayRoutePropagation_ResourceProperties> {
    constructor(name: string, properties: VPNGatewayRoutePropagation_ResourceProperties);
}
export interface VPNGatewayRoutePropagation_ResourceProperties extends AWSResourceProperties {
    RouteTableIds: AWSStringListProperty;
    VpnGatewayId: AWSStringProperty;
}
