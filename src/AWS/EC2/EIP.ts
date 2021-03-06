import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EIP extends AWSResource<EIP_ResourceProperties> {
	constructor(name:string,properties:EIP_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::EIP",dependsOn);
	}
}

export interface EIP_ResourceProperties extends AWSResourceProperties {
	Domain?:AWSStringProperty;
	InstanceId?:AWSStringProperty;
	PublicIpv4Pool?:AWSStringProperty;

}
