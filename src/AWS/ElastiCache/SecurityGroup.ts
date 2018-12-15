import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecurityGroup extends AWSResource<SecurityGroup_ResourceProperties> {
	constructor(name:string,properties:SecurityGroup_ResourceProperties){
		super(name,properties,"AWS::ElastiCache::SecurityGroup");
	}
}

export interface SecurityGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;

}
