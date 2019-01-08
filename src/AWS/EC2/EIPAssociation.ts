import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EIPAssociation extends AWSResource<EIPAssociation_ResourceProperties> {
	constructor(name:string,properties:EIPAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::EIPAssociation",dependsOn);
	}
}

export interface EIPAssociation_ResourceProperties extends AWSResourceProperties {
	AllocationId?:AWSStringProperty;
	EIP?:AWSStringProperty;
	InstanceId?:AWSStringProperty;
	NetworkInterfaceId?:AWSStringProperty;
	PrivateIpAddress?:AWSStringProperty;

}
