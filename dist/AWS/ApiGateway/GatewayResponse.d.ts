import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class GatewayResponse extends AWSResource<GatewayResponse_ResourceProperties> {
    constructor(name: string, properties: GatewayResponse_ResourceProperties);
}
export interface GatewayResponse_ResourceProperties extends AWSResourceProperties {
    ResponseParameters?: Map<string, AWSStringProperty>;
    ResponseTemplates?: Map<string, AWSStringProperty>;
    ResponseType: AWSStringProperty;
    RestApiId: AWSStringProperty;
    StatusCode?: AWSStringProperty;
}
