import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Activity extends AWSResource<Activity_ResourceProperties> {
	constructor(name:string,properties:Activity_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::StepFunctions::Activity",dependsOn);
	}
}

export interface Activity_ResourceProperties extends AWSResourceProperties {
	Name:AWSStringProperty;

}
