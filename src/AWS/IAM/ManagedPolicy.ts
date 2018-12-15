import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ManagedPolicy extends AWSResource<ManagedPolicy_ResourceProperties> {
	constructor(name:string,properties:ManagedPolicy_ResourceProperties){
		super(name,properties,"AWS::IAM::ManagedPolicy");
	}
}

export interface ManagedPolicy_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	Groups?:AWSStringListProperty;
	ManagedPolicyName?:AWSStringProperty;
	Path?:AWSStringProperty;
	PolicyDocument:any;
	Roles?:AWSStringListProperty;
	Users?:AWSStringListProperty;

}
