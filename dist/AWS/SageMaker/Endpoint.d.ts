import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Endpoint extends AWSResource<Endpoint_ResourceProperties> {
    constructor(name: string, properties: Endpoint_ResourceProperties, dependsOn?: string[]);
}
export interface Endpoint_ResourceProperties extends AWSResourceProperties {
    EndpointName?: AWSStringProperty;
    EndpointConfigName: AWSStringProperty;
    Tags?: Tag[];
}
