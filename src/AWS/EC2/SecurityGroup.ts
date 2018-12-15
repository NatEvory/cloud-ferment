import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecurityGroup extends AWSResource<SecurityGroup_ResourceProperties> {
	constructor(name:string,properties:SecurityGroup_ResourceProperties){
		super(name,properties,"AWS::EC2::SecurityGroup");
	}
}

export interface SecurityGroup_ResourceProperties extends AWSResourceProperties {
	GroupDescription:AWSStringProperty;
	GroupName?:AWSStringProperty;
	SecurityGroupEgress?:SecurityGroup_Egress[];
	SecurityGroupIngress?:SecurityGroup_Ingress[];
	Tags?:Tag[];
	VpcId?:AWSStringProperty;

}
export interface SecurityGroup_Ingress {
	CidrIp?:AWSStringProperty;
	CidrIpv6?:AWSStringProperty;
	Description?:AWSStringProperty;
	FromPort?:number;
	IpProtocol:AWSStringProperty;
	SourcePrefixListId?:AWSStringProperty;
	SourceSecurityGroupId?:AWSStringProperty;
	SourceSecurityGroupName?:AWSStringProperty;
	SourceSecurityGroupOwnerId?:AWSStringProperty;
	ToPort?:number;

}
export interface SecurityGroup_Egress {
	CidrIp?:AWSStringProperty;
	CidrIpv6?:AWSStringProperty;
	Description?:AWSStringProperty;
	DestinationPrefixListId?:AWSStringProperty;
	DestinationSecurityGroupId?:AWSStringProperty;
	FromPort?:number;
	IpProtocol:AWSStringProperty;
	ToPort?:number;

}
