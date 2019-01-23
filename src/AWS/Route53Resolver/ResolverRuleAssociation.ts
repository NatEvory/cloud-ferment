import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResolverRuleAssociation extends AWSResource<ResolverRuleAssociation_ResourceProperties> {
	constructor(name:string,properties:ResolverRuleAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Route53Resolver::ResolverRuleAssociation",dependsOn);
	}
}

export interface ResolverRuleAssociation_ResourceProperties extends AWSResourceProperties {
	VPCId:AWSStringProperty;
	ResolverRuleId:AWSStringProperty;
	Name?:AWSStringProperty;

}
