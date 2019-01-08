import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Detector extends AWSResource<Detector_ResourceProperties> {
	constructor(name:string,properties:Detector_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::GuardDuty::Detector",dependsOn);
	}
}

export interface Detector_ResourceProperties extends AWSResourceProperties {
	FindingPublishingFrequency?:AWSStringProperty;
	Enable:boolean;

}
