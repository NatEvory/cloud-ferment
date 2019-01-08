import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Subnet extends AWSResource<Subnet_ResourceProperties> {
	constructor(name:string,properties:Subnet_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::Subnet",dependsOn);
	}
}

export interface Subnet_ResourceProperties extends AWSResourceProperties {
	AssignIpv6AddressOnCreation?:boolean;
	AvailabilityZone?:AWSStringProperty;
	CidrBlock:AWSStringProperty;
	Ipv6CidrBlock?:AWSStringProperty;
	MapPublicIpOnLaunch?:boolean;
	Tags?:Tag[];
	VpcId:AWSStringProperty;

}
