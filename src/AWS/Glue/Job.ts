import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Job extends AWSResource<Job_ResourceProperties> {
	constructor(name:string,properties:Job_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Glue::Job",dependsOn);
	}
}

export interface Job_ResourceProperties extends AWSResourceProperties {
	Role:AWSStringProperty;
	DefaultArguments?:any;
	Connections?:Job_ConnectionsList;
	MaxRetries?:number;
	Description?:AWSStringProperty;
	LogUri?:AWSStringProperty;
	Command:Job_JobCommand;
	AllocatedCapacity?:number;
	ExecutionProperty?:Job_ExecutionProperty;
	Name?:AWSStringProperty;

}
export interface Job_JobCommand {
	ScriptLocation?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface Job_ConnectionsList {
	Connections?:AWSStringListProperty;

}
export interface Job_ExecutionProperty {
	MaxConcurrentRuns?:number;

}
