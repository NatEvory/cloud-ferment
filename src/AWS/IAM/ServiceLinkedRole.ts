import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ServiceLinkedRole extends AWSResource<ServiceLinkedRole_ResourceProperties> {
	constructor(name:string,properties:ServiceLinkedRole_ResourceProperties){
		super(name,properties,"AWS::IAM::ServiceLinkedRole");
	}
}

export interface ServiceLinkedRole_ResourceProperties extends AWSResourceProperties {
	CustomSuffix?:AWSStringProperty;
	Description?:AWSStringProperty;
	AWSServiceName:AWSStringProperty;

}
