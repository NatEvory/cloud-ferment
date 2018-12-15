import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserPoolUserToGroupAttachment extends AWSResource<UserPoolUserToGroupAttachment_ResourceProperties> {
	constructor(name:string,properties:UserPoolUserToGroupAttachment_ResourceProperties){
		super(name,properties,"AWS::Cognito::UserPoolUserToGroupAttachment");
	}
}

export interface UserPoolUserToGroupAttachment_ResourceProperties extends AWSResourceProperties {
	GroupName:AWSStringProperty;
	UserPoolId:AWSStringProperty;
	Username:AWSStringProperty;

}
