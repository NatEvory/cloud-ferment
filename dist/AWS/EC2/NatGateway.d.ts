import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NatGateway extends AWSResource<NatGateway_ResourceProperties> {
    constructor(name: string, properties: NatGateway_ResourceProperties, dependsOn?: string[]);
}
export interface NatGateway_ResourceProperties extends AWSResourceProperties {
    AllocationId: AWSStringProperty;
    SubnetId: AWSStringProperty;
    Tags?: Tag[];
}
