import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Pipeline extends AWSResource<Pipeline_ResourceProperties> {
	constructor(name:string,properties:Pipeline_ResourceProperties){
		super(name,properties,"AWS::DataPipeline::Pipeline");
	}
}

export interface Pipeline_ResourceProperties extends AWSResourceProperties {
	Activate?:boolean;
	Description?:AWSStringProperty;
	Name:AWSStringProperty;
	ParameterObjects:Pipeline_ParameterObject[];
	ParameterValues?:Pipeline_ParameterValue[];
	PipelineObjects?:Pipeline_PipelineObject[];
	PipelineTags?:Pipeline_PipelineTag[];

}
export interface Pipeline_ParameterAttribute {
	Key:AWSStringProperty;
	StringValue:AWSStringProperty;

}
export interface Pipeline_PipelineTag {
	Key:AWSStringProperty;
	Value:AWSStringProperty;

}
export interface Pipeline_ParameterObject {
	Attributes:Pipeline_ParameterAttribute[];
	Id:AWSStringProperty;

}
export interface Pipeline_PipelineObject {
	Fields:Pipeline_Field[];
	Id:AWSStringProperty;
	Name:AWSStringProperty;

}
export interface Pipeline_ParameterValue {
	Id:AWSStringProperty;
	StringValue:AWSStringProperty;

}
export interface Pipeline_Field {
	Key:AWSStringProperty;
	RefValue?:AWSStringProperty;
	StringValue?:AWSStringProperty;

}
