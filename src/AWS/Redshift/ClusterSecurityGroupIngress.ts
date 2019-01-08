import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ClusterSecurityGroupIngress extends AWSResource<ClusterSecurityGroupIngress_ResourceProperties> {
	constructor(name:string,properties:ClusterSecurityGroupIngress_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Redshift::ClusterSecurityGroupIngress",dependsOn);
	}
}

export interface ClusterSecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
	CIDRIP?:AWSStringProperty;
	ClusterSecurityGroupName:AWSStringProperty;
	EC2SecurityGroupName?:AWSStringProperty;
	EC2SecurityGroupOwnerId?:AWSStringProperty;

}
