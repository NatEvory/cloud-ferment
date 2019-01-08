import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Pipeline extends AWSResource<Pipeline_ResourceProperties> {
	constructor(name:string,properties:Pipeline_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoTAnalytics::Pipeline",dependsOn);
	}
}

export interface Pipeline_ResourceProperties extends AWSResourceProperties {
	PipelineName?:AWSStringProperty;
	Tags?:Tag[];
	PipelineActivities:Pipeline_Activity[];

}
export interface Pipeline_DeviceShadowEnrich {
	Attribute?:AWSStringProperty;
	Next?:AWSStringProperty;
	ThingName?:AWSStringProperty;
	RoleArn?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_Activity {
	SelectAttributes?:Pipeline_SelectAttributes;
	Datastore?:Pipeline_Datastore;
	Filter?:Pipeline_Filter;
	AddAttributes?:Pipeline_AddAttributes;
	Channel?:Pipeline_Channel;
	DeviceShadowEnrich?:Pipeline_DeviceShadowEnrich;
	Math?:Pipeline_Math;
	Lambda?:Pipeline_Lambda;
	DeviceRegistryEnrich?:Pipeline_DeviceRegistryEnrich;
	RemoveAttributes?:Pipeline_RemoveAttributes;

}
export interface Pipeline_Lambda {
	BatchSize?:number;
	Next?:AWSStringProperty;
	LambdaName?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_Math {
	Attribute?:AWSStringProperty;
	Next?:AWSStringProperty;
	Math?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_RemoveAttributes {
	Next?:AWSStringProperty;
	Attributes?:AWSStringListProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_SelectAttributes {
	Next?:AWSStringProperty;
	Attributes?:AWSStringListProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_Datastore {
	DatastoreName?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_AddAttributes {
	Next?:AWSStringProperty;
	Attributes?:any;
	Name?:AWSStringProperty;

}
export interface Pipeline_DeviceRegistryEnrich {
	Attribute?:AWSStringProperty;
	Next?:AWSStringProperty;
	ThingName?:AWSStringProperty;
	RoleArn?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_Channel {
	ChannelName?:AWSStringProperty;
	Next?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Pipeline_Filter {
	Filter?:AWSStringProperty;
	Next?:AWSStringProperty;
	Name?:AWSStringProperty;

}
