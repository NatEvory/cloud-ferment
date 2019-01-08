import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class TransitGatewayAttachment extends AWSResource<TransitGatewayAttachment_ResourceProperties> {
    constructor(name: string, properties: TransitGatewayAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface TransitGatewayAttachment_ResourceProperties extends AWSResourceProperties {
    TransitGatewayId: AWSStringProperty;
    VpcId: AWSStringProperty;
    SubnetIds: AWSStringListProperty;
    Tags?: Tag[];
}
