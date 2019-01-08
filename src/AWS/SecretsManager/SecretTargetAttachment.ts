import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecretTargetAttachment extends AWSResource<SecretTargetAttachment_ResourceProperties> {
	constructor(name:string,properties:SecretTargetAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SecretsManager::SecretTargetAttachment",dependsOn);
	}
}

export interface SecretTargetAttachment_ResourceProperties extends AWSResourceProperties {
	SecretId:AWSStringProperty;
	TargetType:AWSStringProperty;
	TargetId:AWSStringProperty;

}
