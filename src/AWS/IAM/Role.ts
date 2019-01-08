import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Role extends AWSResource<Role_ResourceProperties> {
	constructor(name:string,properties:Role_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IAM::Role",dependsOn);
	}
}

export interface Role_ResourceProperties extends AWSResourceProperties {
	AssumeRolePolicyDocument:any;
	ManagedPolicyArns?:AWSStringListProperty;
	MaxSessionDuration?:number;
	Path?:AWSStringProperty;
	PermissionsBoundary?:AWSStringProperty;
	Policies?:Role_Policy[];
	RoleName?:AWSStringProperty;

}
export interface Role_Policy {
	PolicyDocument:any;
	PolicyName:AWSStringProperty;

}
