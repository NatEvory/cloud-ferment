import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ParameterGroup extends AWSResource<ParameterGroup_ResourceProperties> {
	constructor(name:string,properties:ParameterGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ElastiCache::ParameterGroup",dependsOn);
	}
}

export interface ParameterGroup_ResourceProperties extends AWSResourceProperties {
	CacheParameterGroupFamily:AWSStringProperty;
	Description:AWSStringProperty;
	Properties?:{[key:string]:AWSStringProperty};

}
