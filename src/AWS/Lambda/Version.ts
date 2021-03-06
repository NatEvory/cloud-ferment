import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Version extends AWSResource<Version_ResourceProperties> {
	constructor(name:string,properties:Version_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Lambda::Version",dependsOn);
	}
}

export interface Version_ResourceProperties extends AWSResourceProperties {
	CodeSha256?:AWSStringProperty;
	Description?:AWSStringProperty;
	FunctionName:AWSStringProperty;

}
