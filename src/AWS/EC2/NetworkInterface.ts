import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NetworkInterface extends AWSResource<NetworkInterface_ResourceProperties> {
	constructor(name:string,properties:NetworkInterface_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::NetworkInterface",dependsOn);
	}
}

export interface NetworkInterface_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	GroupSet?:AWSStringListProperty;
	InterfaceType?:AWSStringProperty;
	Ipv6AddressCount?:number;
	Ipv6Addresses?:NetworkInterface_InstanceIpv6Address;
	PrivateIpAddress?:AWSStringProperty;
	PrivateIpAddresses?:NetworkInterface_PrivateIpAddressSpecification[];
	SecondaryPrivateIpAddressCount?:number;
	SourceDestCheck?:boolean;
	SubnetId:AWSStringProperty;
	Tags?:Tag[];

}
export interface NetworkInterface_InstanceIpv6Address {
	Ipv6Address:AWSStringProperty;

}
export interface NetworkInterface_PrivateIpAddressSpecification {
	Primary:boolean;
	PrivateIpAddress:AWSStringProperty;

}
