import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class VPCEndpointServicePermissions extends AWSResource<VPCEndpointServicePermissions_ResourceProperties> {
    constructor(name: string, properties: VPCEndpointServicePermissions_ResourceProperties);
}
export interface VPCEndpointServicePermissions_ResourceProperties extends AWSResourceProperties {
    AllowedPrincipals?: AWSStringListProperty;
    ServiceId: AWSStringProperty;
}
