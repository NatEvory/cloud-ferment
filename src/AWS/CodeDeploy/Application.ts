import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Application extends AWSResource<Application_ResourceProperties> {
	constructor(name:string,properties:Application_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CodeDeploy::Application",dependsOn);
	}
}

export interface Application_ResourceProperties extends AWSResourceProperties {
	ApplicationName?:AWSStringProperty;
	ComputePlatform?:AWSStringProperty;

}
