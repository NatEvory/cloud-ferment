import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubnetCidrBlock extends AWSResource<SubnetCidrBlock_ResourceProperties> {
	constructor(name:string,properties:SubnetCidrBlock_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::SubnetCidrBlock",dependsOn);
	}
}

export interface SubnetCidrBlock_ResourceProperties extends AWSResourceProperties {
	Ipv6CidrBlock:AWSStringProperty;
	SubnetId:AWSStringProperty;

}
