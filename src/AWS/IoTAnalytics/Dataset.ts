import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Dataset extends AWSResource<Dataset_ResourceProperties> {
	constructor(name:string,properties:Dataset_ResourceProperties){
		super(name,properties,"AWS::IoTAnalytics::Dataset");
	}
}

export interface Dataset_ResourceProperties extends AWSResourceProperties {
	Actions:Dataset_Action[];
	DatasetName?:AWSStringProperty;
	Triggers?:Dataset_Trigger[];
	RetentionPeriod?:Dataset_RetentionPeriod;
	Tags?:Tag[];

}
export interface Dataset_DatasetContentVersionValue {
	DatasetName?:AWSStringProperty;

}
export interface Dataset_OutputFileUriValue {
	FileName?:AWSStringProperty;

}
export interface Dataset_QueryAction {
	Filters?:Dataset_Filter[];
	SqlQuery:AWSStringProperty;

}
export interface Dataset_Variable {
	DatasetContentVersionValue?:Dataset_DatasetContentVersionValue;
	DoubleValue?:number;
	OutputFileUriValue?:Dataset_OutputFileUriValue;
	VariableName:AWSStringProperty;
	StringValue?:AWSStringProperty;

}
export interface Dataset_Filter {
	DeltaTime?:Dataset_DeltaTime;

}
export interface Dataset_DeltaTime {
	TimeExpression:AWSStringProperty;
	OffsetSeconds:number;

}
export interface Dataset_ResourceConfiguration {
	VolumeSizeInGB:number;
	ComputeType:AWSStringProperty;

}
export interface Dataset_TriggeringDataset {
	DatasetName:AWSStringProperty;

}
export interface Dataset_Schedule {
	ScheduleExpression:AWSStringProperty;

}
export interface Dataset_Trigger {
	Schedule?:Dataset_Schedule;
	TriggeringDataset?:Dataset_TriggeringDataset;

}
export interface Dataset_RetentionPeriod {
	NumberOfDays:number;
	Unlimited:boolean;

}
export interface Dataset_Action {
	ActionName:AWSStringProperty;
	ContainerAction?:Dataset_ContainerAction;
	QueryAction?:Dataset_QueryAction;

}
export interface Dataset_ContainerAction {
	Variables?:Dataset_Variable[];
	ExecutionRoleArn:AWSStringProperty;
	Image:AWSStringProperty;
	ResourceConfiguration:Dataset_ResourceConfiguration;

}
