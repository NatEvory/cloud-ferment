import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DeploymentConfig extends AWSResource<DeploymentConfig_ResourceProperties> {
	constructor(name:string,properties:DeploymentConfig_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CodeDeploy::DeploymentConfig",dependsOn);
	}
}

export interface DeploymentConfig_ResourceProperties extends AWSResourceProperties {
	DeploymentConfigName?:AWSStringProperty;
	MinimumHealthyHosts?:DeploymentConfig_MinimumHealthyHosts;

}
export interface DeploymentConfig_MinimumHealthyHosts {
	Type:AWSStringProperty;
	Value:number;

}
