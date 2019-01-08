import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Member extends AWSResource<Member_ResourceProperties> {
	constructor(name:string,properties:Member_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::GuardDuty::Member",dependsOn);
	}
}

export interface Member_ResourceProperties extends AWSResourceProperties {
	Status?:AWSStringProperty;
	MemberId:AWSStringProperty;
	Email:AWSStringProperty;
	Message?:AWSStringProperty;
	DisableEmailNotification?:boolean;
	DetectorId:AWSStringProperty;

}
