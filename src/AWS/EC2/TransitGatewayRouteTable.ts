import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGatewayRouteTable extends AWSResource<TransitGatewayRouteTable_ResourceProperties> {
	constructor(name:string,properties:TransitGatewayRouteTable_ResourceProperties){
		super(name,properties,"AWS::EC2::TransitGatewayRouteTable");
	}
}

export interface TransitGatewayRouteTable_ResourceProperties extends AWSResourceProperties {
	TransitGatewayId:AWSStringProperty;
	Tags?:Tag[];

}
