import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBParameterGroup extends AWSResource<DBParameterGroup_ResourceProperties> {
	constructor(name:string,properties:DBParameterGroup_ResourceProperties){
		super(name,properties,"AWS::RDS::DBParameterGroup");
	}
}

export interface DBParameterGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	Family:AWSStringProperty;
	Parameters?:Map<string,AWSStringProperty>;
	Tags?:Tag[];

}
