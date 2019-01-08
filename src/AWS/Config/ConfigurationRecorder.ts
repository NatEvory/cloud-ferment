import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ConfigurationRecorder extends AWSResource<ConfigurationRecorder_ResourceProperties> {
	constructor(name:string,properties:ConfigurationRecorder_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Config::ConfigurationRecorder",dependsOn);
	}
}

export interface ConfigurationRecorder_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;
	RecordingGroup?:ConfigurationRecorder_RecordingGroup;
	RoleARN:AWSStringProperty;

}
export interface ConfigurationRecorder_RecordingGroup {
	AllSupported?:boolean;
	IncludeGlobalResourceTypes?:boolean;
	ResourceTypes?:AWSStringListProperty;

}
