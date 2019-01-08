import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResolverRule extends AWSResource<ResolverRule_ResourceProperties> {
	constructor(name:string,properties:ResolverRule_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Route53Resolver::ResolverRule",dependsOn);
	}
}

export interface ResolverRule_ResourceProperties extends AWSResourceProperties {
	ResolverEndpointId?:AWSStringProperty;
	DomainName:AWSStringProperty;
	RuleType:AWSStringProperty;
	TargetIps?:ResolverRule_TargetAddress[];
	Tags?:Tag[];
	Name?:AWSStringProperty;

}
export interface ResolverRule_TargetAddress {
	Ip:AWSStringProperty;
	Port:AWSStringProperty;

}
