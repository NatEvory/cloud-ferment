import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ClusterSecurityGroupIngress extends AWSResource<ClusterSecurityGroupIngress_ResourceProperties> {
	constructor(name:string,properties:ClusterSecurityGroupIngress_ResourceProperties){
		super(name,properties,"AWS::Redshift::ClusterSecurityGroupIngress");
	}
}

export interface ClusterSecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
	CIDRIP?:AWSStringProperty;
	ClusterSecurityGroupName:AWSStringProperty;
	EC2SecurityGroupName?:AWSStringProperty;
	EC2SecurityGroupOwnerId?:AWSStringProperty;

}
