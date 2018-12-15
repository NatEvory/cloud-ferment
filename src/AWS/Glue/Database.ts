import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Database extends AWSResource<Database_ResourceProperties> {
	constructor(name:string,properties:Database_ResourceProperties){
		super(name,properties,"AWS::Glue::Database");
	}
}

export interface Database_ResourceProperties extends AWSResourceProperties {
	DatabaseInput:Database_DatabaseInput;
	CatalogId:AWSStringProperty;

}
export interface Database_DatabaseInput {
	LocationUri?:AWSStringProperty;
	Description?:AWSStringProperty;
	Parameters?:any;
	Name?:AWSStringProperty;

}
