import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ConfigurationAggregator extends AWSResource<ConfigurationAggregator_ResourceProperties> {
	constructor(name:string,properties:ConfigurationAggregator_ResourceProperties){
		super(name,properties,"AWS::Config::ConfigurationAggregator");
	}
}

export interface ConfigurationAggregator_ResourceProperties extends AWSResourceProperties {
	AccountAggregationSources?:ConfigurationAggregator_AccountAggregationSource[];
	ConfigurationAggregatorName:AWSStringProperty;
	OrganizationAggregationSource?:ConfigurationAggregator_OrganizationAggregationSource;

}
export interface ConfigurationAggregator_OrganizationAggregationSource {
	AllAwsRegions?:boolean;
	AwsRegions?:AWSStringListProperty;
	RoleArn:AWSStringProperty;

}
export interface ConfigurationAggregator_AccountAggregationSource {
	AllAwsRegions?:boolean;
	AwsRegions?:AWSStringListProperty;
	AccountIds:AWSStringListProperty;

}
