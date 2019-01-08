import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPC extends AWSResource<VPC_ResourceProperties> {
	constructor(name:string,properties:VPC_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPC",dependsOn);
	}
}

export interface VPC_ResourceProperties extends AWSResourceProperties {
	CidrBlock:AWSStringProperty;
	EnableDnsHostnames?:boolean;
	EnableDnsSupport?:boolean;
	InstanceTenancy?:AWSStringProperty;
	Tags?:Tag[];

}
