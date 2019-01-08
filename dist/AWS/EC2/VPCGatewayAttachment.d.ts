import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPCGatewayAttachment extends AWSResource<VPCGatewayAttachment_ResourceProperties> {
    constructor(name: string, properties: VPCGatewayAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface VPCGatewayAttachment_ResourceProperties extends AWSResourceProperties {
    InternetGatewayId?: AWSStringProperty;
    VpcId: AWSStringProperty;
    VpnGatewayId?: AWSStringProperty;
}
