import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EnvironmentEC2 extends AWSResource<EnvironmentEC2_ResourceProperties> {
	constructor(name:string,properties:EnvironmentEC2_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Cloud9::EnvironmentEC2",dependsOn);
	}
}

export interface EnvironmentEC2_ResourceProperties extends AWSResourceProperties {
	Repositories?:EnvironmentEC2_Repository[];
	OwnerArn?:AWSStringProperty;
	Description?:AWSStringProperty;
	AutomaticStopTimeMinutes?:number;
	SubnetId?:AWSStringProperty;
	InstanceType:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface EnvironmentEC2_Repository {
	PathComponent:AWSStringProperty;
	RepositoryUrl:AWSStringProperty;

}
