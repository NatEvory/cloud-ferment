import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TransitGatewayRouteTable extends AWSResource<TransitGatewayRouteTable_ResourceProperties> {
    constructor(name: string, properties: TransitGatewayRouteTable_ResourceProperties);
}
export interface TransitGatewayRouteTable_ResourceProperties extends AWSResourceProperties {
    TransitGatewayId: AWSStringProperty;
    Tags?: Tag[];
}
