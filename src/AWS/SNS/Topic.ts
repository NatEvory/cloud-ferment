import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Topic extends AWSResource<Topic_ResourceProperties> {
	constructor(name:string,properties:Topic_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SNS::Topic",dependsOn);
	}
}

export interface Topic_ResourceProperties extends AWSResourceProperties {
	DisplayName?:AWSStringProperty;
	KmsMasterKeyId?:AWSStringProperty;
	Subscription?:Topic_Subscription[];
	TopicName?:AWSStringProperty;

}
export interface Topic_Subscription {
	Endpoint:AWSStringProperty;
	Protocol:AWSStringProperty;

}
