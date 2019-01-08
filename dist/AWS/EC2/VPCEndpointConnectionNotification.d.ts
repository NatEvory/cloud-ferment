import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class VPCEndpointConnectionNotification extends AWSResource<VPCEndpointConnectionNotification_ResourceProperties> {
    constructor(name: string, properties: VPCEndpointConnectionNotification_ResourceProperties, dependsOn?: string[]);
}
export interface VPCEndpointConnectionNotification_ResourceProperties extends AWSResourceProperties {
    ConnectionEvents: AWSStringListProperty;
    VPCEndpointId?: AWSStringProperty;
    ServiceId?: AWSStringProperty;
    ConnectionNotificationArn: AWSStringProperty;
}
