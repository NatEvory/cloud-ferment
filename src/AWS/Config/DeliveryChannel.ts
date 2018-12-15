import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DeliveryChannel extends AWSResource<DeliveryChannel_ResourceProperties> {
	constructor(name:string,properties:DeliveryChannel_ResourceProperties){
		super(name,properties,"AWS::Config::DeliveryChannel");
	}
}

export interface DeliveryChannel_ResourceProperties extends AWSResourceProperties {
	ConfigSnapshotDeliveryProperties?:DeliveryChannel_ConfigSnapshotDeliveryProperties;
	Name?:AWSStringProperty;
	S3BucketName:AWSStringProperty;
	S3KeyPrefix?:AWSStringProperty;
	SnsTopicARN?:AWSStringProperty;

}
export interface DeliveryChannel_ConfigSnapshotDeliveryProperties {
	DeliveryFrequency?:AWSStringProperty;

}
