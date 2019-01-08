import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGatewayAttachment extends AWSResource<TransitGatewayAttachment_ResourceProperties> {
	constructor(name:string,properties:TransitGatewayAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::TransitGatewayAttachment",dependsOn);
	}
}

export interface TransitGatewayAttachment_ResourceProperties extends AWSResourceProperties {
	TransitGatewayId:AWSStringProperty;
	VpcId:AWSStringProperty;
	SubnetIds:AWSStringListProperty;
	Tags?:Tag[];

}
