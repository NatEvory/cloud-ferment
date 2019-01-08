import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DirectoryConfig extends AWSResource<DirectoryConfig_ResourceProperties> {
	constructor(name:string,properties:DirectoryConfig_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AppStream::DirectoryConfig",dependsOn);
	}
}

export interface DirectoryConfig_ResourceProperties extends AWSResourceProperties {
	OrganizationalUnitDistinguishedNames:AWSStringListProperty;
	ServiceAccountCredentials:DirectoryConfig_ServiceAccountCredentials;
	DirectoryName:AWSStringProperty;

}
export interface DirectoryConfig_ServiceAccountCredentials {
	AccountName:AWSStringProperty;
	AccountPassword:AWSStringProperty;

}
