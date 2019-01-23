import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBClusterParameterGroup extends AWSResource<DBClusterParameterGroup_ResourceProperties> {
	constructor(name:string,properties:DBClusterParameterGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DocDB::DBClusterParameterGroup",dependsOn);
	}
}

export interface DBClusterParameterGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	Parameters:any;
	Family:AWSStringProperty;
	Tags?:Tag[];
	Name?:AWSStringProperty;

}
