import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ListenerRule extends AWSResource<ListenerRule_ResourceProperties> {
    constructor(name: string, properties: ListenerRule_ResourceProperties);
}
export interface ListenerRule_ResourceProperties extends AWSResourceProperties {
    Actions: ListenerRule_Action[];
    Conditions: ListenerRule_RuleCondition[];
    ListenerArn: AWSStringProperty;
    Priority: number;
}
export interface ListenerRule_AuthenticateOidcConfig {
    AuthenticationRequestExtraParams?: Map<string, AWSStringProperty>;
    AuthorizationEndpoint: AWSStringProperty;
    ClientId: AWSStringProperty;
    ClientSecret: AWSStringProperty;
    Issuer: AWSStringProperty;
    OnUnauthenticatedRequest?: AWSStringProperty;
    Scope?: AWSStringProperty;
    SessionCookieName?: AWSStringProperty;
    SessionTimeout?: number;
    TokenEndpoint: AWSStringProperty;
    UserInfoEndpoint: AWSStringProperty;
}
export interface ListenerRule_AuthenticateCognitoConfig {
    AuthenticationRequestExtraParams?: Map<string, AWSStringProperty>;
    OnUnauthenticatedRequest?: AWSStringProperty;
    Scope?: AWSStringProperty;
    SessionCookieName?: AWSStringProperty;
    SessionTimeout?: number;
    UserPoolArn: AWSStringProperty;
    UserPoolClientId: AWSStringProperty;
    UserPoolDomain: AWSStringProperty;
}
export interface ListenerRule_FixedResponseConfig {
    ContentType?: AWSStringProperty;
    MessageBody?: AWSStringProperty;
    StatusCode: AWSStringProperty;
}
export interface ListenerRule_Action {
    AuthenticateCognitoConfig?: ListenerRule_AuthenticateCognitoConfig;
    AuthenticateOidcConfig?: ListenerRule_AuthenticateOidcConfig;
    FixedResponseConfig?: ListenerRule_FixedResponseConfig;
    Order?: number;
    RedirectConfig?: ListenerRule_RedirectConfig;
    TargetGroupArn?: AWSStringProperty;
    Type: AWSStringProperty;
}
export interface ListenerRule_RuleCondition {
    Field?: AWSStringProperty;
    Values?: AWSStringListProperty;
}
export interface ListenerRule_RedirectConfig {
    Host?: AWSStringProperty;
    Path?: AWSStringProperty;
    Port?: AWSStringProperty;
    Protocol?: AWSStringProperty;
    Query?: AWSStringProperty;
    StatusCode: AWSStringProperty;
}
