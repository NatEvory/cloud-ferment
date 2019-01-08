import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ReplicationSubnetGroup extends AWSResource<ReplicationSubnetGroup_ResourceProperties> {
	constructor(name:string,properties:ReplicationSubnetGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DMS::ReplicationSubnetGroup",dependsOn);
	}
}

export interface ReplicationSubnetGroup_ResourceProperties extends AWSResourceProperties {
	ReplicationSubnetGroupDescription:AWSStringProperty;
	ReplicationSubnetGroupIdentifier?:AWSStringProperty;
	SubnetIds:AWSStringListProperty;
	Tags?:Tag[];

}
