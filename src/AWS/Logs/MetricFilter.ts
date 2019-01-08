import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class MetricFilter extends AWSResource<MetricFilter_ResourceProperties> {
	constructor(name:string,properties:MetricFilter_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Logs::MetricFilter",dependsOn);
	}
}

export interface MetricFilter_ResourceProperties extends AWSResourceProperties {
	FilterPattern:AWSStringProperty;
	LogGroupName:AWSStringProperty;
	MetricTransformations:MetricFilter_MetricTransformation[];

}
export interface MetricFilter_MetricTransformation {
	DefaultValue?:number;
	MetricName:AWSStringProperty;
	MetricNamespace:AWSStringProperty;
	MetricValue:AWSStringProperty;

}
