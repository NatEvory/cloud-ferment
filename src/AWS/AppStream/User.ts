import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class User extends AWSResource<User_ResourceProperties> {
	constructor(name:string,properties:User_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AppStream::User",dependsOn);
	}
}

export interface User_ResourceProperties extends AWSResourceProperties {
	UserName:AWSStringProperty;
	FirstName?:AWSStringProperty;
	MessageAction?:AWSStringProperty;
	LastName?:AWSStringProperty;
	AuthenticationType:AWSStringProperty;

}
