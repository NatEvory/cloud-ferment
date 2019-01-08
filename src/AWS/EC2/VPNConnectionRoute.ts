import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPNConnectionRoute extends AWSResource<VPNConnectionRoute_ResourceProperties> {
	constructor(name:string,properties:VPNConnectionRoute_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPNConnectionRoute",dependsOn);
	}
}

export interface VPNConnectionRoute_ResourceProperties extends AWSResourceProperties {
	DestinationCidrBlock:AWSStringProperty;
	VpnConnectionId:AWSStringProperty;

}
