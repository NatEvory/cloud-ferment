import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class PrivateDnsNamespace extends AWSResource<PrivateDnsNamespace_ResourceProperties> {
    constructor(name: string, properties: PrivateDnsNamespace_ResourceProperties, dependsOn?: string[]);
}
export interface PrivateDnsNamespace_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    Vpc: AWSStringProperty;
    Name: AWSStringProperty;
}
