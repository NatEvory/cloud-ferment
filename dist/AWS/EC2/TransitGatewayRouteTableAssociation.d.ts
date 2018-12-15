import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TransitGatewayRouteTableAssociation extends AWSResource<TransitGatewayRouteTableAssociation_ResourceProperties> {
    constructor(name: string, properties: TransitGatewayRouteTableAssociation_ResourceProperties);
}
export interface TransitGatewayRouteTableAssociation_ResourceProperties extends AWSResourceProperties {
    TransitGatewayRouteTableId: AWSStringProperty;
    TransitGatewayAttachmentId: AWSStringProperty;
}
