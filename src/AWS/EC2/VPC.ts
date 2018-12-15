import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPC extends AWSResource<VPC_ResourceProperties> {
	constructor(name:string,properties:VPC_ResourceProperties){
		super(name,properties,"AWS::EC2::VPC");
	}
}

export interface VPC_ResourceProperties extends AWSResourceProperties {
	CidrBlock:AWSStringProperty;
	EnableDnsHostnames?:boolean;
	EnableDnsSupport?:boolean;
	InstanceTenancy?:AWSStringProperty;
	Tags?:Tag[];

}
