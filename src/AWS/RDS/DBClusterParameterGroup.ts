import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBClusterParameterGroup extends AWSResource<DBClusterParameterGroup_ResourceProperties> {
	constructor(name:string,properties:DBClusterParameterGroup_ResourceProperties){
		super(name,properties,"AWS::RDS::DBClusterParameterGroup");
	}
}

export interface DBClusterParameterGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	Family:AWSStringProperty;
	Parameters:any;
	Tags?:Tag[];

}
