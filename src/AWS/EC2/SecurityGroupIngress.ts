import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecurityGroupIngress extends AWSResource<SecurityGroupIngress_ResourceProperties> {
	constructor(name:string,properties:SecurityGroupIngress_ResourceProperties){
		super(name,properties,"AWS::EC2::SecurityGroupIngress");
	}
}

export interface SecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
	CidrIp?:AWSStringProperty;
	CidrIpv6?:AWSStringProperty;
	Description?:AWSStringProperty;
	FromPort?:number;
	GroupId?:AWSStringProperty;
	GroupName?:AWSStringProperty;
	IpProtocol:AWSStringProperty;
	SourcePrefixListId?:AWSStringProperty;
	SourceSecurityGroupId?:AWSStringProperty;
	SourceSecurityGroupName?:AWSStringProperty;
	SourceSecurityGroupOwnerId?:AWSStringProperty;
	ToPort?:number;

}
