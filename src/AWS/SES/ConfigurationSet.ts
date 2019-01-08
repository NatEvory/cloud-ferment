import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ConfigurationSet extends AWSResource<ConfigurationSet_ResourceProperties> {
	constructor(name:string,properties:ConfigurationSet_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SES::ConfigurationSet",dependsOn);
	}
}

export interface ConfigurationSet_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;

}
