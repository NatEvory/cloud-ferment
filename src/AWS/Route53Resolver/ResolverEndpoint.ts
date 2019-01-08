import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResolverEndpoint extends AWSResource<ResolverEndpoint_ResourceProperties> {
	constructor(name:string,properties:ResolverEndpoint_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Route53Resolver::ResolverEndpoint",dependsOn);
	}
}

export interface ResolverEndpoint_ResourceProperties extends AWSResourceProperties {
	IpAddresses:ResolverEndpoint_IpAddressRequest[];
	Direction:AWSStringProperty;
	SecurityGroupIds:AWSStringListProperty;
	Tags?:Tag[];
	Name?:AWSStringProperty;

}
export interface ResolverEndpoint_IpAddressRequest {
	Ip?:AWSStringProperty;
	SubnetId:AWSStringProperty;

}
