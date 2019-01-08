import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Route extends AWSResource<Route_ResourceProperties> {
    constructor(name: string, properties: Route_ResourceProperties, dependsOn?: string[]);
}
export interface Route_ResourceProperties extends AWSResourceProperties {
    DestinationCidrBlock?: AWSStringProperty;
    DestinationIpv6CidrBlock?: AWSStringProperty;
    EgressOnlyInternetGatewayId?: AWSStringProperty;
    GatewayId?: AWSStringProperty;
    InstanceId?: AWSStringProperty;
    NatGatewayId?: AWSStringProperty;
    NetworkInterfaceId?: AWSStringProperty;
    RouteTableId: AWSStringProperty;
    VpcPeeringConnectionId?: AWSStringProperty;
}
