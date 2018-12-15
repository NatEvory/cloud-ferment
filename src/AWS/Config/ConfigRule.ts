import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ConfigRule extends AWSResource<ConfigRule_ResourceProperties> {
	constructor(name:string,properties:ConfigRule_ResourceProperties){
		super(name,properties,"AWS::Config::ConfigRule");
	}
}

export interface ConfigRule_ResourceProperties extends AWSResourceProperties {
	ConfigRuleName?:AWSStringProperty;
	Description?:AWSStringProperty;
	InputParameters?:any;
	MaximumExecutionFrequency?:AWSStringProperty;
	Scope?:ConfigRule_Scope;
	Source:ConfigRule_Source;

}
export interface ConfigRule_Scope {
	ComplianceResourceId?:AWSStringProperty;
	ComplianceResourceTypes?:AWSStringListProperty;
	TagKey?:AWSStringProperty;
	TagValue?:AWSStringProperty;

}
export interface ConfigRule_Source {
	Owner:AWSStringProperty;
	SourceDetails?:ConfigRule_SourceDetail[];
	SourceIdentifier:AWSStringProperty;

}
export interface ConfigRule_SourceDetail {
	EventSource:AWSStringProperty;
	MaximumExecutionFrequency?:AWSStringProperty;
	MessageType:AWSStringProperty;

}
