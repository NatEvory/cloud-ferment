import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResourcePolicy extends AWSResource<ResourcePolicy_ResourceProperties> {
	constructor(name:string,properties:ResourcePolicy_ResourceProperties){
		super(name,properties,"AWS::SecretsManager::ResourcePolicy");
	}
}

export interface ResourcePolicy_ResourceProperties extends AWSResourceProperties {
	SecretId:AWSStringProperty;
	ResourcePolicy:any;

}
