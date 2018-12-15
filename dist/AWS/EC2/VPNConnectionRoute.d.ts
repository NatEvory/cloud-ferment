import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class VPNConnectionRoute extends AWSResource<VPNConnectionRoute_ResourceProperties> {
    constructor(name: string, properties: VPNConnectionRoute_ResourceProperties);
}
export interface VPNConnectionRoute_ResourceProperties extends AWSResourceProperties {
    DestinationCidrBlock: AWSStringProperty;
    VpnConnectionId: AWSStringProperty;
}
