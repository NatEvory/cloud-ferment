import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EIPAssociation extends AWSResource<EIPAssociation_ResourceProperties> {
    constructor(name: string, properties: EIPAssociation_ResourceProperties, dependsOn?: string[]);
}
export interface EIPAssociation_ResourceProperties extends AWSResourceProperties {
    AllocationId?: AWSStringProperty;
    EIP?: AWSStringProperty;
    InstanceId?: AWSStringProperty;
    NetworkInterfaceId?: AWSStringProperty;
    PrivateIpAddress?: AWSStringProperty;
}
