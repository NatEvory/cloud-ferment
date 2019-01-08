import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCEndpointServicePermissions extends AWSResource<VPCEndpointServicePermissions_ResourceProperties> {
	constructor(name:string,properties:VPCEndpointServicePermissions_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPCEndpointServicePermissions",dependsOn);
	}
}

export interface VPCEndpointServicePermissions_ResourceProperties extends AWSResourceProperties {
	AllowedPrincipals?:AWSStringListProperty;
	ServiceId:AWSStringProperty;

}
