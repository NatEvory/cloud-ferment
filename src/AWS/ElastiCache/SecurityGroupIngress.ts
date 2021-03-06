import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecurityGroupIngress extends AWSResource<SecurityGroupIngress_ResourceProperties> {
	constructor(name:string,properties:SecurityGroupIngress_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ElastiCache::SecurityGroupIngress",dependsOn);
	}
}

export interface SecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
	CacheSecurityGroupName:AWSStringProperty;
	EC2SecurityGroupName:AWSStringProperty;
	EC2SecurityGroupOwnerId?:AWSStringProperty;

}
