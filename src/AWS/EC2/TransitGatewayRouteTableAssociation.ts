import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGatewayRouteTableAssociation extends AWSResource<TransitGatewayRouteTableAssociation_ResourceProperties> {
	constructor(name:string,properties:TransitGatewayRouteTableAssociation_ResourceProperties){
		super(name,properties,"AWS::EC2::TransitGatewayRouteTableAssociation");
	}
}

export interface TransitGatewayRouteTableAssociation_ResourceProperties extends AWSResourceProperties {
	TransitGatewayRouteTableId:AWSStringProperty;
	TransitGatewayAttachmentId:AWSStringProperty;

}
