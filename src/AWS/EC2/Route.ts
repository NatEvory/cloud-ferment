import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Route extends AWSResource<Route_ResourceProperties> {
	constructor(name:string,properties:Route_ResourceProperties){
		super(name,properties,"AWS::EC2::Route");
	}
}

export interface Route_ResourceProperties extends AWSResourceProperties {
	DestinationCidrBlock?:AWSStringProperty;
	DestinationIpv6CidrBlock?:AWSStringProperty;
	EgressOnlyInternetGatewayId?:AWSStringProperty;
	GatewayId?:AWSStringProperty;
	InstanceId?:AWSStringProperty;
	NatGatewayId?:AWSStringProperty;
	NetworkInterfaceId?:AWSStringProperty;
	RouteTableId:AWSStringProperty;
	VpcPeeringConnectionId?:AWSStringProperty;

}
