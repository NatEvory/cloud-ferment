import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Method extends AWSResource<Method_ResourceProperties> {
    constructor(name: string, properties: Method_ResourceProperties, dependsOn?: string[]);
}
export interface Method_ResourceProperties extends AWSResourceProperties {
    ApiKeyRequired?: boolean;
    AuthorizationScopes?: AWSStringListProperty;
    AuthorizationType?: AWSStringProperty;
    AuthorizerId?: AWSStringProperty;
    HttpMethod: AWSStringProperty;
    Integration?: Method_Integration;
    MethodResponses?: Method_MethodResponse[];
    OperationName?: AWSStringProperty;
    RequestModels?: {
        [key: string]: AWSStringProperty;
    };
    RequestParameters?: {
        [key: string]: boolean;
    };
    RequestValidatorId?: AWSStringProperty;
    ResourceId: AWSStringProperty;
    RestApiId: AWSStringProperty;
}
export interface Method_MethodResponse {
    ResponseModels?: {
        [key: string]: AWSStringProperty;
    };
    ResponseParameters?: {
        [key: string]: boolean;
    };
    StatusCode: AWSStringProperty;
}
export interface Method_Integration {
    CacheKeyParameters?: AWSStringListProperty;
    CacheNamespace?: AWSStringProperty;
    ConnectionId?: AWSStringProperty;
    ConnectionType?: AWSStringProperty;
    ContentHandling?: AWSStringProperty;
    Credentials?: AWSStringProperty;
    IntegrationHttpMethod?: AWSStringProperty;
    IntegrationResponses?: Method_IntegrationResponse[];
    PassthroughBehavior?: AWSStringProperty;
    RequestParameters?: {
        [key: string]: AWSStringProperty;
    };
    RequestTemplates?: {
        [key: string]: AWSStringProperty;
    };
    TimeoutInMillis?: number;
    Type?: AWSStringProperty;
    Uri?: AWSStringProperty;
}
export interface Method_IntegrationResponse {
    ContentHandling?: AWSStringProperty;
    ResponseParameters?: {
        [key: string]: AWSStringProperty;
    };
    ResponseTemplates?: {
        [key: string]: AWSStringProperty;
    };
    SelectionPattern?: AWSStringProperty;
    StatusCode: AWSStringProperty;
}
