import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Instance extends AWSResource<Instance_ResourceProperties> {
    constructor(name: string, properties: Instance_ResourceProperties, dependsOn?: string[]);
}
export interface Instance_ResourceProperties extends AWSResourceProperties {
    InstanceAttributes: number;
    InstanceId?: AWSStringProperty;
    ServiceId: AWSStringProperty;
}
