import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ElasticLoadBalancerAttachment extends AWSResource<ElasticLoadBalancerAttachment_ResourceProperties> {
	constructor(name:string,properties:ElasticLoadBalancerAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::OpsWorks::ElasticLoadBalancerAttachment",dependsOn);
	}
}

export interface ElasticLoadBalancerAttachment_ResourceProperties extends AWSResourceProperties {
	ElasticLoadBalancerName:AWSStringProperty;
	LayerId:AWSStringProperty;

}
