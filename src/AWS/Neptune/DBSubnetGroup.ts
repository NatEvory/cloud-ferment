import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBSubnetGroup extends AWSResource<DBSubnetGroup_ResourceProperties> {
	constructor(name:string,properties:DBSubnetGroup_ResourceProperties){
		super(name,properties,"AWS::Neptune::DBSubnetGroup");
	}
}

export interface DBSubnetGroup_ResourceProperties extends AWSResourceProperties {
	DBSubnetGroupName?:AWSStringProperty;
	DBSubnetGroupDescription:AWSStringProperty;
	SubnetIds:AWSStringListProperty;
	Tags?:Tag[];

}
