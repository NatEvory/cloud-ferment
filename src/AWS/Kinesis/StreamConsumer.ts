import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class StreamConsumer extends AWSResource<StreamConsumer_ResourceProperties> {
	constructor(name:string,properties:StreamConsumer_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Kinesis::StreamConsumer",dependsOn);
	}
}

export interface StreamConsumer_ResourceProperties extends AWSResourceProperties {
	ConsumerName:AWSStringProperty;
	StreamARN:AWSStringProperty;

}
