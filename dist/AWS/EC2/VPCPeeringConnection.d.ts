import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPCPeeringConnection extends AWSResource<VPCPeeringConnection_ResourceProperties> {
    constructor(name: string, properties: VPCPeeringConnection_ResourceProperties, dependsOn?: string[]);
}
export interface VPCPeeringConnection_ResourceProperties extends AWSResourceProperties {
    PeerOwnerId?: AWSStringProperty;
    PeerRegion?: AWSStringProperty;
    PeerRoleArn?: AWSStringProperty;
    PeerVpcId: AWSStringProperty;
    Tags?: Tag[];
    VpcId: AWSStringProperty;
}
