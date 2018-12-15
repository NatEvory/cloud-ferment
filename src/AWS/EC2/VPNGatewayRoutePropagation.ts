import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPNGatewayRoutePropagation extends AWSResource<VPNGatewayRoutePropagation_ResourceProperties> {
	constructor(name:string,properties:VPNGatewayRoutePropagation_ResourceProperties){
		super(name,properties,"AWS::EC2::VPNGatewayRoutePropagation");
	}
}

export interface VPNGatewayRoutePropagation_ResourceProperties extends AWSResourceProperties {
	RouteTableIds:AWSStringListProperty;
	VpnGatewayId:AWSStringProperty;

}
