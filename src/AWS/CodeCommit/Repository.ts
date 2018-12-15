import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Repository extends AWSResource<Repository_ResourceProperties> {
	constructor(name:string,properties:Repository_ResourceProperties){
		super(name,properties,"AWS::CodeCommit::Repository");
	}
}

export interface Repository_ResourceProperties extends AWSResourceProperties {
	RepositoryName:AWSStringProperty;
	Triggers?:Repository_RepositoryTrigger[];
	RepositoryDescription?:AWSStringProperty;

}
export interface Repository_RepositoryTrigger {
	Events?:AWSStringListProperty;
	Branches?:AWSStringListProperty;
	CustomData?:AWSStringProperty;
	DestinationArn?:AWSStringProperty;
	Name?:AWSStringProperty;

}
