import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserPoolUser extends AWSResource<UserPoolUser_ResourceProperties> {
	constructor(name:string,properties:UserPoolUser_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Cognito::UserPoolUser",dependsOn);
	}
}

export interface UserPoolUser_ResourceProperties extends AWSResourceProperties {
	ValidationData?:UserPoolUser_AttributeType[];
	UserPoolId:AWSStringProperty;
	Username?:AWSStringProperty;
	MessageAction?:AWSStringProperty;
	DesiredDeliveryMediums?:AWSStringListProperty;
	ForceAliasCreation?:boolean;
	UserAttributes?:UserPoolUser_AttributeType[];

}
export interface UserPoolUser_AttributeType {
	Value?:AWSStringProperty;
	Name?:AWSStringProperty;

}
