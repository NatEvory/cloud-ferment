import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGatewayRouteTablePropagation extends AWSResource<TransitGatewayRouteTablePropagation_ResourceProperties> {
	constructor(name:string,properties:TransitGatewayRouteTablePropagation_ResourceProperties){
		super(name,properties,"AWS::EC2::TransitGatewayRouteTablePropagation");
	}
}

export interface TransitGatewayRouteTablePropagation_ResourceProperties extends AWSResourceProperties {
	TransitGatewayRouteTableId:AWSStringProperty;
	TransitGatewayAttachmentId:AWSStringProperty;

}
