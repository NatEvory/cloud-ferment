import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NetworkAcl extends AWSResource<NetworkAcl_ResourceProperties> {
    constructor(name: string, properties: NetworkAcl_ResourceProperties, dependsOn?: string[]);
}
export interface NetworkAcl_ResourceProperties extends AWSResourceProperties {
    Tags?: Tag[];
    VpcId: AWSStringProperty;
}
