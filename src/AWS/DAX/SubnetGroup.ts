import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubnetGroup extends AWSResource<SubnetGroup_ResourceProperties> {
	constructor(name:string,properties:SubnetGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DAX::SubnetGroup",dependsOn);
	}
}

export interface SubnetGroup_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	SubnetGroupName?:AWSStringProperty;
	SubnetIds:AWSStringListProperty;

}
