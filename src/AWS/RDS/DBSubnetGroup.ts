import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBSubnetGroup extends AWSResource<DBSubnetGroup_ResourceProperties> {
	constructor(name:string,properties:DBSubnetGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::RDS::DBSubnetGroup",dependsOn);
	}
}

export interface DBSubnetGroup_ResourceProperties extends AWSResourceProperties {
	DBSubnetGroupDescription:AWSStringProperty;
	DBSubnetGroupName?:AWSStringProperty;
	SubnetIds:AWSStringListProperty;
	Tags?:Tag[];

}
