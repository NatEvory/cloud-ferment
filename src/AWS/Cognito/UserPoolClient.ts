import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserPoolClient extends AWSResource<UserPoolClient_ResourceProperties> {
	constructor(name:string,properties:UserPoolClient_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Cognito::UserPoolClient",dependsOn);
	}
}

export interface UserPoolClient_ResourceProperties extends AWSResourceProperties {
	GenerateSecret?:boolean;
	ClientName?:AWSStringProperty;
	UserPoolId:AWSStringProperty;
	ExplicitAuthFlows?:AWSStringListProperty;
	RefreshTokenValidity?:number;
	ReadAttributes?:AWSStringListProperty;
	WriteAttributes?:AWSStringListProperty;

}
