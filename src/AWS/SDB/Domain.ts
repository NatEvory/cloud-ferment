import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Domain extends AWSResource<Domain_ResourceProperties> {
	constructor(name:string,properties:Domain_ResourceProperties){
		super(name,properties,"AWS::SDB::Domain");
	}
}

export interface Domain_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;

}
