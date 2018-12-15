import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PolicyPrincipalAttachment extends AWSResource<PolicyPrincipalAttachment_ResourceProperties> {
	constructor(name:string,properties:PolicyPrincipalAttachment_ResourceProperties){
		super(name,properties,"AWS::IoT::PolicyPrincipalAttachment");
	}
}

export interface PolicyPrincipalAttachment_ResourceProperties extends AWSResourceProperties {
	PolicyName:AWSStringProperty;
	Principal:AWSStringProperty;

}
