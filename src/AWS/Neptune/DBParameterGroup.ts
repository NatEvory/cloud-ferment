import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBParameterGroup extends AWSResource<DBParameterGroup_ResourceProperties> {
	constructor(name:string,properties:DBParameterGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Neptune::DBParameterGroup",dependsOn);
	}
}

export interface DBParameterGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	Parameters:any;
	Family:AWSStringProperty;
	Tags?:Tag[];
	Name?:AWSStringProperty;

}
