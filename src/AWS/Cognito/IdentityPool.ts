import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class IdentityPool extends AWSResource<IdentityPool_ResourceProperties> {
	constructor(name:string,properties:IdentityPool_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Cognito::IdentityPool",dependsOn);
	}
}

export interface IdentityPool_ResourceProperties extends AWSResourceProperties {
	PushSync?:IdentityPool_PushSync;
	CognitoIdentityProviders?:IdentityPool_CognitoIdentityProvider[];
	CognitoEvents?:any;
	DeveloperProviderName?:AWSStringProperty;
	CognitoStreams?:IdentityPool_CognitoStreams;
	IdentityPoolName?:AWSStringProperty;
	AllowUnauthenticatedIdentities:boolean;
	SupportedLoginProviders?:any;
	SamlProviderARNs?:AWSStringListProperty;
	OpenIdConnectProviderARNs?:AWSStringListProperty;

}
export interface IdentityPool_PushSync {
	ApplicationArns?:AWSStringListProperty;
	RoleArn?:AWSStringProperty;

}
export interface IdentityPool_CognitoIdentityProvider {
	ServerSideTokenCheck?:boolean;
	ProviderName?:AWSStringProperty;
	ClientId?:AWSStringProperty;

}
export interface IdentityPool_CognitoStreams {
	StreamingStatus?:AWSStringProperty;
	StreamName?:AWSStringProperty;
	RoleArn?:AWSStringProperty;

}
