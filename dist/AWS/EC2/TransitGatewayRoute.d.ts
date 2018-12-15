import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TransitGatewayRoute extends AWSResource<TransitGatewayRoute_ResourceProperties> {
    constructor(name: string, properties: TransitGatewayRoute_ResourceProperties);
}
export interface TransitGatewayRoute_ResourceProperties extends AWSResourceProperties {
    TransitGatewayRouteTableId: AWSStringProperty;
    DestinationCidrBlock?: AWSStringProperty;
    Blackhole?: boolean;
    TransitGatewayAttachmentId?: AWSStringProperty;
}
