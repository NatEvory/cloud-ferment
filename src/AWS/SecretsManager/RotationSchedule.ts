import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class RotationSchedule extends AWSResource<RotationSchedule_ResourceProperties> {
	constructor(name:string,properties:RotationSchedule_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SecretsManager::RotationSchedule",dependsOn);
	}
}

export interface RotationSchedule_ResourceProperties extends AWSResourceProperties {
	SecretId:AWSStringProperty;
	RotationLambdaARN?:AWSStringProperty;
	RotationRules?:RotationSchedule_RotationRules;

}
export interface RotationSchedule_RotationRules {
	AutomaticallyAfterDays?:number;

}
