import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Listener extends AWSResource<Listener_ResourceProperties> {
	constructor(name:string,properties:Listener_ResourceProperties){
		super(name,properties,"AWS::ElasticLoadBalancingV2::Listener");
	}
}

export interface Listener_ResourceProperties extends AWSResourceProperties {
	Certificates?:Listener_Certificate[];
	DefaultActions:Listener_Action[];
	LoadBalancerArn:AWSStringProperty;
	Port:number;
	Protocol:AWSStringProperty;
	SslPolicy?:AWSStringProperty;

}
export interface Listener_AuthenticateOidcConfig {
	AuthenticationRequestExtraParams?:{[key:string]:AWSStringProperty};
	AuthorizationEndpoint:AWSStringProperty;
	ClientId:AWSStringProperty;
	ClientSecret:AWSStringProperty;
	Issuer:AWSStringProperty;
	OnUnauthenticatedRequest?:AWSStringProperty;
	Scope?:AWSStringProperty;
	SessionCookieName?:AWSStringProperty;
	SessionTimeout?:number;
	TokenEndpoint:AWSStringProperty;
	UserInfoEndpoint:AWSStringProperty;

}
export interface Listener_AuthenticateCognitoConfig {
	AuthenticationRequestExtraParams?:{[key:string]:AWSStringProperty};
	OnUnauthenticatedRequest?:AWSStringProperty;
	Scope?:AWSStringProperty;
	SessionCookieName?:AWSStringProperty;
	SessionTimeout?:number;
	UserPoolArn:AWSStringProperty;
	UserPoolClientId:AWSStringProperty;
	UserPoolDomain:AWSStringProperty;

}
export interface Listener_RedirectConfig {
	Host?:AWSStringProperty;
	Path?:AWSStringProperty;
	Port?:AWSStringProperty;
	Protocol?:AWSStringProperty;
	Query?:AWSStringProperty;
	StatusCode:AWSStringProperty;

}
export interface Listener_Action {
	AuthenticateCognitoConfig?:Listener_AuthenticateCognitoConfig;
	AuthenticateOidcConfig?:Listener_AuthenticateOidcConfig;
	FixedResponseConfig?:Listener_FixedResponseConfig;
	Order?:number;
	RedirectConfig?:Listener_RedirectConfig;
	TargetGroupArn?:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface Listener_FixedResponseConfig {
	ContentType?:AWSStringProperty;
	MessageBody?:AWSStringProperty;
	StatusCode:AWSStringProperty;

}
export interface Listener_Certificate {
	CertificateArn?:AWSStringProperty;

}
