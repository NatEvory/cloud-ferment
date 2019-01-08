import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResourcePolicy extends AWSResource<ResourcePolicy_ResourceProperties> {
	constructor(name:string,properties:ResourcePolicy_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SecretsManager::ResourcePolicy",dependsOn);
	}
}

export interface ResourcePolicy_ResourceProperties extends AWSResourceProperties {
	SecretId:AWSStringProperty;
	ResourcePolicy:any;

}
