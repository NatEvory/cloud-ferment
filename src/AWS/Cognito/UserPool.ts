import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserPool extends AWSResource<UserPool_ResourceProperties> {
	constructor(name:string,properties:UserPool_ResourceProperties){
		super(name,properties,"AWS::Cognito::UserPool");
	}
}

export interface UserPool_ResourceProperties extends AWSResourceProperties {
	UserPoolTags?:any;
	Policies?:UserPool_Policies;
	MfaConfiguration?:AWSStringProperty;
	Schema?:UserPool_SchemaAttribute[];
	AdminCreateUserConfig?:UserPool_AdminCreateUserConfig;
	SmsAuthenticationMessage?:AWSStringProperty;
	UserPoolName?:AWSStringProperty;
	SmsVerificationMessage?:AWSStringProperty;
	EmailConfiguration?:UserPool_EmailConfiguration;
	SmsConfiguration?:UserPool_SmsConfiguration;
	AliasAttributes?:AWSStringListProperty;
	EmailVerificationSubject?:AWSStringProperty;
	LambdaConfig?:UserPool_LambdaConfig;
	UsernameAttributes?:AWSStringListProperty;
	AutoVerifiedAttributes?:AWSStringListProperty;
	DeviceConfiguration?:UserPool_DeviceConfiguration;
	EmailVerificationMessage?:AWSStringProperty;

}
export interface UserPool_PasswordPolicy {
	RequireNumbers?:boolean;
	MinimumLength?:number;
	RequireUppercase?:boolean;
	RequireLowercase?:boolean;
	RequireSymbols?:boolean;

}
export interface UserPool_Policies {
	PasswordPolicy?:UserPool_PasswordPolicy;

}
export interface UserPool_EmailConfiguration {
	ReplyToEmailAddress?:AWSStringProperty;
	SourceArn?:AWSStringProperty;

}
export interface UserPool_LambdaConfig {
	CreateAuthChallenge?:AWSStringProperty;
	PreAuthentication?:AWSStringProperty;
	DefineAuthChallenge?:AWSStringProperty;
	PreSignUp?:AWSStringProperty;
	PostAuthentication?:AWSStringProperty;
	PostConfirmation?:AWSStringProperty;
	CustomMessage?:AWSStringProperty;
	VerifyAuthChallengeResponse?:AWSStringProperty;

}
export interface UserPool_AdminCreateUserConfig {
	InviteMessageTemplate?:UserPool_InviteMessageTemplate;
	UnusedAccountValidityDays?:number;
	AllowAdminCreateUserOnly?:boolean;

}
export interface UserPool_SchemaAttribute {
	DeveloperOnlyAttribute?:boolean;
	Mutable?:boolean;
	AttributeDataType?:AWSStringProperty;
	StringAttributeConstraints?:UserPool_StringAttributeConstraints;
	Required?:boolean;
	NumberAttributeConstraints?:UserPool_NumberAttributeConstraints;
	Name?:AWSStringProperty;

}
export interface UserPool_NumberAttributeConstraints {
	MinValue?:AWSStringProperty;
	MaxValue?:AWSStringProperty;

}
export interface UserPool_SmsConfiguration {
	ExternalId?:AWSStringProperty;
	SnsCallerArn?:AWSStringProperty;

}
export interface UserPool_DeviceConfiguration {
	DeviceOnlyRememberedOnUserPrompt?:boolean;
	ChallengeRequiredOnNewDevice?:boolean;

}
export interface UserPool_InviteMessageTemplate {
	EmailMessage?:AWSStringProperty;
	SMSMessage?:AWSStringProperty;
	EmailSubject?:AWSStringProperty;

}
export interface UserPool_StringAttributeConstraints {
	MinLength?:AWSStringProperty;
	MaxLength?:AWSStringProperty;

}
