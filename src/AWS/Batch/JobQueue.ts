import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class JobQueue extends AWSResource<JobQueue_ResourceProperties> {
	constructor(name:string,properties:JobQueue_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Batch::JobQueue",dependsOn);
	}
}

export interface JobQueue_ResourceProperties extends AWSResourceProperties {
	ComputeEnvironmentOrder:JobQueue_ComputeEnvironmentOrder[];
	Priority:number;
	State?:AWSStringProperty;
	JobQueueName?:AWSStringProperty;

}
export interface JobQueue_ComputeEnvironmentOrder {
	ComputeEnvironment:AWSStringProperty;
	Order:number;

}
