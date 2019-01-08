import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserToGroupAddition extends AWSResource<UserToGroupAddition_ResourceProperties> {
	constructor(name:string,properties:UserToGroupAddition_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IAM::UserToGroupAddition",dependsOn);
	}
}

export interface UserToGroupAddition_ResourceProperties extends AWSResourceProperties {
	GroupName:AWSStringProperty;
	Users:AWSStringListProperty;

}
