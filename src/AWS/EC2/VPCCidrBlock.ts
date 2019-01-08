import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCCidrBlock extends AWSResource<VPCCidrBlock_ResourceProperties> {
	constructor(name:string,properties:VPCCidrBlock_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPCCidrBlock",dependsOn);
	}
}

export interface VPCCidrBlock_ResourceProperties extends AWSResourceProperties {
	AmazonProvidedIpv6CidrBlock?:boolean;
	CidrBlock?:AWSStringProperty;
	VpcId:AWSStringProperty;

}
