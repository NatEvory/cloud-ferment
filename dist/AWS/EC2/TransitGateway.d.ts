import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TransitGateway extends AWSResource<TransitGateway_ResourceProperties> {
    constructor(name: string, properties: TransitGateway_ResourceProperties);
}
export interface TransitGateway_ResourceProperties extends AWSResourceProperties {
    DefaultRouteTablePropagation?: AWSStringProperty;
    Description?: AWSStringProperty;
    AutoAcceptSharedAttachments?: AWSStringProperty;
    DefaultRouteTableAssociation?: AWSStringProperty;
    VpnEcmpSupport?: AWSStringProperty;
    DnsSupport?: AWSStringProperty;
    AmazonSideAsn?: number;
    Tags?: Tag[];
}
