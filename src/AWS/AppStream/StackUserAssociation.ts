import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class StackUserAssociation extends AWSResource<StackUserAssociation_ResourceProperties> {
	constructor(name:string,properties:StackUserAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AppStream::StackUserAssociation",dependsOn);
	}
}

export interface StackUserAssociation_ResourceProperties extends AWSResourceProperties {
	SendEmailNotification?:boolean;
	UserName:AWSStringProperty;
	StackName:AWSStringProperty;
	AuthenticationType:AWSStringProperty;

}
