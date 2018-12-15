import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Build extends AWSResource<Build_ResourceProperties> {
	constructor(name:string,properties:Build_ResourceProperties){
		super(name,properties,"AWS::GameLift::Build");
	}
}

export interface Build_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;
	StorageLocation?:Build_S3Location;
	Version?:AWSStringProperty;

}
export interface Build_S3Location {
	Bucket:AWSStringProperty;
	Key:AWSStringProperty;
	RoleArn:AWSStringProperty;

}
