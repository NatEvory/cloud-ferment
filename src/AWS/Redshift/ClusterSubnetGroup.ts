import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ClusterSubnetGroup extends AWSResource<ClusterSubnetGroup_ResourceProperties> {
	constructor(name:string,properties:ClusterSubnetGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Redshift::ClusterSubnetGroup",dependsOn);
	}
}

export interface ClusterSubnetGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	SubnetIds:AWSStringListProperty;
	Tags?:Tag[];

}
