import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCEndpointServicePermissions extends AWSResource<VPCEndpointServicePermissions_ResourceProperties> {
	constructor(name:string,properties:VPCEndpointServicePermissions_ResourceProperties){
		super(name,properties,"AWS::EC2::VPCEndpointServicePermissions");
	}
}

export interface VPCEndpointServicePermissions_ResourceProperties extends AWSResourceProperties {
	AllowedPrincipals?:AWSStringListProperty;
	ServiceId:AWSStringProperty;

}
