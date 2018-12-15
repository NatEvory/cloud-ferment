import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Authorizer extends AWSResource<Authorizer_ResourceProperties> {
    constructor(name: string, properties: Authorizer_ResourceProperties);
}
export interface Authorizer_ResourceProperties extends AWSResourceProperties {
    AuthType?: AWSStringProperty;
    AuthorizerCredentials?: AWSStringProperty;
    AuthorizerResultTtlInSeconds?: number;
    AuthorizerUri?: AWSStringProperty;
    IdentitySource?: AWSStringProperty;
    IdentityValidationExpression?: AWSStringProperty;
    Name?: AWSStringProperty;
    ProviderARNs?: AWSStringListProperty;
    RestApiId: AWSStringProperty;
    Type?: AWSStringProperty;
}
