import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Group extends AWSResource<Group_ResourceProperties> {
	constructor(name:string,properties:Group_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IAM::Group",dependsOn);
	}
}

export interface Group_ResourceProperties extends AWSResourceProperties {
	GroupName?:AWSStringProperty;
	ManagedPolicyArns?:AWSStringListProperty;
	Path?:AWSStringProperty;
	Policies?:Group_Policy[];

}
export interface Group_Policy {
	PolicyDocument:any;
	PolicyName:AWSStringProperty;

}
