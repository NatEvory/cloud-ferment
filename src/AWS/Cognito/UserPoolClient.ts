import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserPoolClient extends AWSResource<UserPoolClient_ResourceProperties> {
	constructor(name:string,properties:UserPoolClient_ResourceProperties){
		super(name,properties,"AWS::Cognito::UserPoolClient");
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
