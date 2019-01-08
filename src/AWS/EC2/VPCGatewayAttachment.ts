import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCGatewayAttachment extends AWSResource<VPCGatewayAttachment_ResourceProperties> {
	constructor(name:string,properties:VPCGatewayAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPCGatewayAttachment",dependsOn);
	}
}

export interface VPCGatewayAttachment_ResourceProperties extends AWSResourceProperties {
	InternetGatewayId?:AWSStringProperty;
	VpcId:AWSStringProperty;
	VpnGatewayId?:AWSStringProperty;

}
