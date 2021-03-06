import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBSecurityGroupIngress extends AWSResource<DBSecurityGroupIngress_ResourceProperties> {
	constructor(name:string,properties:DBSecurityGroupIngress_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::RDS::DBSecurityGroupIngress",dependsOn);
	}
}

export interface DBSecurityGroupIngress_ResourceProperties extends AWSResourceProperties {
	CIDRIP?:AWSStringProperty;
	DBSecurityGroupName:AWSStringProperty;
	EC2SecurityGroupId?:AWSStringProperty;
	EC2SecurityGroupName?:AWSStringProperty;
	EC2SecurityGroupOwnerId?:AWSStringProperty;

}
