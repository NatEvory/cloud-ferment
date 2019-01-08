import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Queue extends AWSResource<Queue_ResourceProperties> {
	constructor(name:string,properties:Queue_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SQS::Queue",dependsOn);
	}
}

export interface Queue_ResourceProperties extends AWSResourceProperties {
	ContentBasedDeduplication?:boolean;
	DelaySeconds?:number;
	FifoQueue?:boolean;
	KmsDataKeyReusePeriodSeconds?:number;
	KmsMasterKeyId?:AWSStringProperty;
	MaximumMessageSize?:number;
	MessageRetentionPeriod?:number;
	QueueName?:AWSStringProperty;
	ReceiveMessageWaitTimeSeconds?:number;
	RedrivePolicy?:any;
	Tags?:Tag[];
	VisibilityTimeout?:number;

}
