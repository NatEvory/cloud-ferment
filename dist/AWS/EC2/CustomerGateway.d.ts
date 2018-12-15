import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class CustomerGateway extends AWSResource<CustomerGateway_ResourceProperties> {
    constructor(name: string, properties: CustomerGateway_ResourceProperties);
}
export interface CustomerGateway_ResourceProperties extends AWSResourceProperties {
    BgpAsn: number;
    IpAddress: AWSStringProperty;
    Tags?: Tag[];
    Type: AWSStringProperty;
}
