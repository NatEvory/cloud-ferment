import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ServiceLinkedRole extends AWSResource<ServiceLinkedRole_ResourceProperties> {
    constructor(name: string, properties: ServiceLinkedRole_ResourceProperties);
}
export interface ServiceLinkedRole_ResourceProperties extends AWSResourceProperties {
    CustomSuffix?: AWSStringProperty;
    Description?: AWSStringProperty;
    AWSServiceName: AWSStringProperty;
}
