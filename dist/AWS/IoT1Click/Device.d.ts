import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Device extends AWSResource<Device_ResourceProperties> {
    constructor(name: string, properties: Device_ResourceProperties);
}
export interface Device_ResourceProperties extends AWSResourceProperties {
    DeviceId: AWSStringProperty;
    Enabled: boolean;
}
