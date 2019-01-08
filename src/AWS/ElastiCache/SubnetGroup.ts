import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubnetGroup extends AWSResource<SubnetGroup_ResourceProperties> {
	constructor(name:string,properties:SubnetGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ElastiCache::SubnetGroup",dependsOn);
	}
}

export interface SubnetGroup_ResourceProperties extends AWSResourceProperties {
	CacheSubnetGroupName?:AWSStringProperty;
	Description:AWSStringProperty;
	SubnetIds:AWSStringListProperty;

}
