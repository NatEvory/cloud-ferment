import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserProfile extends AWSResource<UserProfile_ResourceProperties> {
	constructor(name:string,properties:UserProfile_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::OpsWorks::UserProfile",dependsOn);
	}
}

export interface UserProfile_ResourceProperties extends AWSResourceProperties {
	AllowSelfManagement?:boolean;
	IamUserArn:AWSStringProperty;
	SshPublicKey?:AWSStringProperty;
	SshUsername?:AWSStringProperty;

}
