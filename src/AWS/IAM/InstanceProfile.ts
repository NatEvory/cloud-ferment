import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class InstanceProfile extends AWSResource<InstanceProfile_ResourceProperties> {
	constructor(name:string,properties:InstanceProfile_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IAM::InstanceProfile",dependsOn);
	}
}

export interface InstanceProfile_ResourceProperties extends AWSResourceProperties {
	InstanceProfileName?:AWSStringProperty;
	Path?:AWSStringProperty;
	Roles:AWSStringListProperty;

}
