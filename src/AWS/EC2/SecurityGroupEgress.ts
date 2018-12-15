import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecurityGroupEgress extends AWSResource<SecurityGroupEgress_ResourceProperties> {
	constructor(name:string,properties:SecurityGroupEgress_ResourceProperties){
		super(name,properties,"AWS::EC2::SecurityGroupEgress");
	}
}

export interface SecurityGroupEgress_ResourceProperties extends AWSResourceProperties {
	CidrIp?:AWSStringProperty;
	CidrIpv6?:AWSStringProperty;
	Description?:AWSStringProperty;
	DestinationPrefixListId?:AWSStringProperty;
	DestinationSecurityGroupId?:AWSStringProperty;
	FromPort?:number;
	GroupId:AWSStringProperty;
	IpProtocol:AWSStringProperty;
	ToPort?:number;

}
