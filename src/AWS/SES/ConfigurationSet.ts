import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ConfigurationSet extends AWSResource<ConfigurationSet_ResourceProperties> {
	constructor(name:string,properties:ConfigurationSet_ResourceProperties){
		super(name,properties,"AWS::SES::ConfigurationSet");
	}
}

export interface ConfigurationSet_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;

}
