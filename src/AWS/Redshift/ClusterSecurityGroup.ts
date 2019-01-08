import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ClusterSecurityGroup extends AWSResource<ClusterSecurityGroup_ResourceProperties> {
	constructor(name:string,properties:ClusterSecurityGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Redshift::ClusterSecurityGroup",dependsOn);
	}
}

export interface ClusterSecurityGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	Tags?:Tag[];

}
