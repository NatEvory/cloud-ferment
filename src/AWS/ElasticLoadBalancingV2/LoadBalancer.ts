import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LoadBalancer extends AWSResource<LoadBalancer_ResourceProperties> {
	constructor(name:string,properties:LoadBalancer_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ElasticLoadBalancingV2::LoadBalancer",dependsOn);
	}
}

export interface LoadBalancer_ResourceProperties extends AWSResourceProperties {
	IpAddressType?:AWSStringProperty;
	LoadBalancerAttributes?:LoadBalancer_LoadBalancerAttribute[];
	Name?:AWSStringProperty;
	Scheme?:AWSStringProperty;
	SecurityGroups?:AWSStringListProperty;
	SubnetMappings?:LoadBalancer_SubnetMapping[];
	Subnets?:AWSStringListProperty;
	Tags?:Tag[];
	Type?:AWSStringProperty;

}
export interface LoadBalancer_LoadBalancerAttribute {
	Key?:AWSStringProperty;
	Value?:AWSStringProperty;

}
export interface LoadBalancer_SubnetMapping {
	AllocationId:AWSStringProperty;
	SubnetId:AWSStringProperty;

}
