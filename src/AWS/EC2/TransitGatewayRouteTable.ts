import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGatewayRouteTable extends AWSResource<TransitGatewayRouteTable_ResourceProperties> {
	constructor(name:string,properties:TransitGatewayRouteTable_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::TransitGatewayRouteTable",dependsOn);
	}
}

export interface TransitGatewayRouteTable_ResourceProperties extends AWSResourceProperties {
	TransitGatewayId:AWSStringProperty;
	Tags?:Tag[];

}
