import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TransitGatewayRouteTablePropagation extends AWSResource<TransitGatewayRouteTablePropagation_ResourceProperties> {
    constructor(name: string, properties: TransitGatewayRouteTablePropagation_ResourceProperties, dependsOn?: string[]);
}
export interface TransitGatewayRouteTablePropagation_ResourceProperties extends AWSResourceProperties {
    TransitGatewayRouteTableId: AWSStringProperty;
    TransitGatewayAttachmentId: AWSStringProperty;
}
