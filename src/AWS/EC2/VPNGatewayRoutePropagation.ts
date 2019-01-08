import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPNGatewayRoutePropagation extends AWSResource<VPNGatewayRoutePropagation_ResourceProperties> {
	constructor(name:string,properties:VPNGatewayRoutePropagation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPNGatewayRoutePropagation",dependsOn);
	}
}

export interface VPNGatewayRoutePropagation_ResourceProperties extends AWSResourceProperties {
	RouteTableIds:AWSStringListProperty;
	VpnGatewayId:AWSStringProperty;

}
