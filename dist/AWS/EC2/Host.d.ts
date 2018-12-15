import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Host extends AWSResource<Host_ResourceProperties> {
    constructor(name: string, properties: Host_ResourceProperties);
}
export interface Host_ResourceProperties extends AWSResourceProperties {
    AutoPlacement?: AWSStringProperty;
    AvailabilityZone: AWSStringProperty;
    InstanceType: AWSStringProperty;
}
