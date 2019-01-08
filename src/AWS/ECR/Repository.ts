import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Repository extends AWSResource<Repository_ResourceProperties> {
	constructor(name:string,properties:Repository_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ECR::Repository",dependsOn);
	}
}

export interface Repository_ResourceProperties extends AWSResourceProperties {
	LifecyclePolicy?:Repository_LifecyclePolicy;
	RepositoryName?:AWSStringProperty;
	RepositoryPolicyText?:any;

}
export interface Repository_LifecyclePolicy {
	LifecyclePolicyText?:AWSStringProperty;
	RegistryId?:AWSStringProperty;

}
