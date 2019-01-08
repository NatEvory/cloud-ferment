import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPNGateway extends AWSResource<VPNGateway_ResourceProperties> {
    constructor(name: string, properties: VPNGateway_ResourceProperties, dependsOn?: string[]);
}
export interface VPNGateway_ResourceProperties extends AWSResourceProperties {
    AmazonSideAsn?: number;
    Tags?: Tag[];
    Type: AWSStringProperty;
}
