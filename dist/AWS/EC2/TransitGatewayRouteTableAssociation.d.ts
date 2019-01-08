import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TransitGatewayRouteTableAssociation extends AWSResource<TransitGatewayRouteTableAssociation_ResourceProperties> {
    constructor(name: string, properties: TransitGatewayRouteTableAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface TransitGatewayRouteTableAssociation_ResourceProperties extends AWSResourceProperties {
    TransitGatewayRouteTableId: AWSStringProperty;
    TransitGatewayAttachmentId: AWSStringProperty;
}
