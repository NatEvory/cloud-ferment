import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NetworkAclEntry extends AWSResource<NetworkAclEntry_ResourceProperties> {
	constructor(name:string,properties:NetworkAclEntry_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::NetworkAclEntry",dependsOn);
	}
}

export interface NetworkAclEntry_ResourceProperties extends AWSResourceProperties {
	CidrBlock:AWSStringProperty;
	Egress?:boolean;
	Icmp?:NetworkAclEntry_Icmp;
	Ipv6CidrBlock?:AWSStringProperty;
	NetworkAclId:AWSStringProperty;
	PortRange?:NetworkAclEntry_PortRange;
	Protocol:number;
	RuleAction:AWSStringProperty;
	RuleNumber:number;

}
export interface NetworkAclEntry_Icmp {
	Code?:number;
	Type?:number;

}
export interface NetworkAclEntry_PortRange {
	From?:number;
	To?:number;

}
