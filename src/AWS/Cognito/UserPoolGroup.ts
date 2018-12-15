import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserPoolGroup extends AWSResource<UserPoolGroup_ResourceProperties> {
	constructor(name:string,properties:UserPoolGroup_ResourceProperties){
		super(name,properties,"AWS::Cognito::UserPoolGroup");
	}
}

export interface UserPoolGroup_ResourceProperties extends AWSResourceProperties {
	GroupName?:AWSStringProperty;
	Description?:AWSStringProperty;
	UserPoolId:AWSStringProperty;
	Precedence?:number;
	RoleArn?:AWSStringProperty;

}
