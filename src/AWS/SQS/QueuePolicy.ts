import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class QueuePolicy extends AWSResource<QueuePolicy_ResourceProperties> {
	constructor(name:string,properties:QueuePolicy_ResourceProperties){
		super(name,properties,"AWS::SQS::QueuePolicy");
	}
}

export interface QueuePolicy_ResourceProperties extends AWSResourceProperties {
	PolicyDocument:any;
	Queues:AWSStringListProperty;

}
