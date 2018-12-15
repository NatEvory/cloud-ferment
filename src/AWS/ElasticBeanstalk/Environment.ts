import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Environment extends AWSResource<Environment_ResourceProperties> {
	constructor(name:string,properties:Environment_ResourceProperties){
		super(name,properties,"AWS::ElasticBeanstalk::Environment");
	}
}

export interface Environment_ResourceProperties extends AWSResourceProperties {
	ApplicationName:AWSStringProperty;
	CNAMEPrefix?:AWSStringProperty;
	Description?:AWSStringProperty;
	EnvironmentName?:AWSStringProperty;
	OptionSettings?:Environment_OptionSetting[];
	PlatformArn?:AWSStringProperty;
	SolutionStackName?:AWSStringProperty;
	Tags?:Tag[];
	TemplateName?:AWSStringProperty;
	Tier?:Environment_Tier;
	VersionLabel?:AWSStringProperty;

}
export interface Environment_OptionSetting {
	Namespace:AWSStringProperty;
	OptionName:AWSStringProperty;
	ResourceName?:AWSStringProperty;
	Value?:AWSStringProperty;

}
export interface Environment_Tier {
	Name?:AWSStringProperty;
	Type?:AWSStringProperty;
	Version?:AWSStringProperty;

}
