import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Alarm extends AWSResource<Alarm_ResourceProperties> {
	constructor(name:string,properties:Alarm_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudWatch::Alarm",dependsOn);
	}
}

export interface Alarm_ResourceProperties extends AWSResourceProperties {
	ActionsEnabled?:boolean;
	AlarmActions?:AWSStringListProperty;
	AlarmDescription?:AWSStringProperty;
	AlarmName?:AWSStringProperty;
	ComparisonOperator:AWSStringProperty;
	DatapointsToAlarm?:number;
	Dimensions?:Alarm_Dimension[];
	EvaluateLowSampleCountPercentile?:AWSStringProperty;
	EvaluationPeriods:number;
	ExtendedStatistic?:AWSStringProperty;
	InsufficientDataActions?:AWSStringListProperty;
	MetricName?:AWSStringProperty;
	Namespace?:AWSStringProperty;
	OKActions?:AWSStringListProperty;
	Period?:number;
	Statistic?:AWSStringProperty;
	Threshold:number;
	TreatMissingData?:AWSStringProperty;
	Unit?:AWSStringProperty;

}
export interface Alarm_Dimension {
	Name:AWSStringProperty;
	Value:AWSStringProperty;

}
