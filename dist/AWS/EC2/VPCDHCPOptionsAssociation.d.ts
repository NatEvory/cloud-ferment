import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPCDHCPOptionsAssociation extends AWSResource<VPCDHCPOptionsAssociation_ResourceProperties> {
    constructor(name: string, properties: VPCDHCPOptionsAssociation_ResourceProperties);
}
export interface VPCDHCPOptionsAssociation_ResourceProperties extends AWSResourceProperties {
    DhcpOptionsId: AWSStringProperty;
    VpcId: AWSStringProperty;
}
