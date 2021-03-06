import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGatewayRoute extends AWSResource<TransitGatewayRoute_ResourceProperties> {
	constructor(name:string,properties:TransitGatewayRoute_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::TransitGatewayRoute",dependsOn);
	}
}

export interface TransitGatewayRoute_ResourceProperties extends AWSResourceProperties {
	TransitGatewayRouteTableId:AWSStringProperty;
	DestinationCidrBlock?:AWSStringProperty;
	Blackhole?:boolean;
	TransitGatewayAttachmentId?:AWSStringProperty;

}
