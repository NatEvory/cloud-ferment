import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class EIP extends AWSResource<EIP_ResourceProperties> {
    constructor(name: string, properties: EIP_ResourceProperties);
}
export interface EIP_ResourceProperties extends AWSResourceProperties {
    Domain?: AWSStringProperty;
    InstanceId?: AWSStringProperty;
    PublicIpv4Pool?: AWSStringProperty;
}
