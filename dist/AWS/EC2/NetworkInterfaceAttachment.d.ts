import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NetworkInterfaceAttachment extends AWSResource<NetworkInterfaceAttachment_ResourceProperties> {
    constructor(name: string, properties: NetworkInterfaceAttachment_ResourceProperties);
}
export interface NetworkInterfaceAttachment_ResourceProperties extends AWSResourceProperties {
    DeleteOnTermination?: boolean;
    DeviceIndex: AWSStringProperty;
    InstanceId: AWSStringProperty;
    NetworkInterfaceId: AWSStringProperty;
}
