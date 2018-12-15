import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UserToGroupAddition extends AWSResource<UserToGroupAddition_ResourceProperties> {
	constructor(name:string,properties:UserToGroupAddition_ResourceProperties){
		super(name,properties,"AWS::IAM::UserToGroupAddition");
	}
}

export interface UserToGroupAddition_ResourceProperties extends AWSResourceProperties {
	GroupName:AWSStringProperty;
	Users:AWSStringListProperty;

}
