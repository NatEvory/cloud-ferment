import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ApplicationOutput extends AWSResource<ApplicationOutput_ResourceProperties> {
	constructor(name:string,properties:ApplicationOutput_ResourceProperties){
		super(name,properties,"AWS::KinesisAnalytics::ApplicationOutput");
	}
}

export interface ApplicationOutput_ResourceProperties extends AWSResourceProperties {
	ApplicationName:AWSStringProperty;
	Output:ApplicationOutput_Output;

}
export interface ApplicationOutput_KinesisFirehoseOutput {
	ResourceARN:AWSStringProperty;
	RoleARN:AWSStringProperty;

}
export interface ApplicationOutput_KinesisStreamsOutput {
	ResourceARN:AWSStringProperty;
	RoleARN:AWSStringProperty;

}
export interface ApplicationOutput_Output {
	DestinationSchema:ApplicationOutput_DestinationSchema;
	LambdaOutput?:ApplicationOutput_LambdaOutput;
	KinesisFirehoseOutput?:ApplicationOutput_KinesisFirehoseOutput;
	KinesisStreamsOutput?:ApplicationOutput_KinesisStreamsOutput;
	Name?:AWSStringProperty;

}
export interface ApplicationOutput_LambdaOutput {
	ResourceARN:AWSStringProperty;
	RoleARN:AWSStringProperty;

}
export interface ApplicationOutput_DestinationSchema {
	RecordFormatType?:AWSStringProperty;

}
