import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class VPNGatewayRoutePropagation extends AWSResource<VPNGatewayRoutePropagation_ResourceProperties> {
    constructor(name: string, properties: VPNGatewayRoutePropagation_ResourceProperties, dependsOn?: string[]);
}
export interface VPNGatewayRoutePropagation_ResourceProperties extends AWSResourceProperties {
    RouteTableIds: AWSStringListProperty;
    VpnGatewayId: AWSStringProperty;
}
