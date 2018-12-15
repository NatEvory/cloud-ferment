import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Master extends AWSResource<Master_ResourceProperties> {
	constructor(name:string,properties:Master_ResourceProperties){
		super(name,properties,"AWS::GuardDuty::Master");
	}
}

export interface Master_ResourceProperties extends AWSResourceProperties {
	DetectorId:AWSStringProperty;
	MasterId:AWSStringProperty;
	InvitationId?:AWSStringProperty;

}
