import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class GatewayResponse extends AWSResource<GatewayResponse_ResourceProperties> {
    constructor(name: string, properties: GatewayResponse_ResourceProperties, dependsOn?: string[]);
}
export interface GatewayResponse_ResourceProperties extends AWSResourceProperties {
    ResponseParameters?: {
        [key: string]: AWSStringProperty;
    };
    ResponseTemplates?: {
        [key: string]: AWSStringProperty;
    };
    ResponseType: AWSStringProperty;
    RestApiId: AWSStringProperty;
    StatusCode?: AWSStringProperty;
}
