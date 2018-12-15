import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NamedQuery extends AWSResource<NamedQuery_ResourceProperties> {
	constructor(name:string,properties:NamedQuery_ResourceProperties){
		super(name,properties,"AWS::Athena::NamedQuery");
	}
}

export interface NamedQuery_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	QueryString:AWSStringProperty;
	Database:AWSStringProperty;
	Name?:AWSStringProperty;

}
