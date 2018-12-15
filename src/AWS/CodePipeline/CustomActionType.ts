import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CustomActionType extends AWSResource<CustomActionType_ResourceProperties> {
	constructor(name:string,properties:CustomActionType_ResourceProperties){
		super(name,properties,"AWS::CodePipeline::CustomActionType");
	}
}

export interface CustomActionType_ResourceProperties extends AWSResourceProperties {
	Category:AWSStringProperty;
	ConfigurationProperties?:CustomActionType_ConfigurationProperties[];
	InputArtifactDetails:CustomActionType_ArtifactDetails;
	OutputArtifactDetails:CustomActionType_ArtifactDetails;
	Provider:AWSStringProperty;
	Settings?:CustomActionType_Settings;
	Version?:AWSStringProperty;

}
export interface CustomActionType_Settings {
	EntityUrlTemplate?:AWSStringProperty;
	ExecutionUrlTemplate?:AWSStringProperty;
	RevisionUrlTemplate?:AWSStringProperty;
	ThirdPartyConfigurationUrl?:AWSStringProperty;

}
export interface CustomActionType_ArtifactDetails {
	MaximumCount:number;
	MinimumCount:number;

}
export interface CustomActionType_ConfigurationProperties {
	Description?:AWSStringProperty;
	Key:boolean;
	Name:AWSStringProperty;
	Queryable?:boolean;
	Required:boolean;
	Secret:boolean;
	Type?:AWSStringProperty;

}
