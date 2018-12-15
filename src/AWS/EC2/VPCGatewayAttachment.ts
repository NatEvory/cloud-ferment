import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCGatewayAttachment extends AWSResource<VPCGatewayAttachment_ResourceProperties> {
	constructor(name:string,properties:VPCGatewayAttachment_ResourceProperties){
		super(name,properties,"AWS::EC2::VPCGatewayAttachment");
	}
}

export interface VPCGatewayAttachment_ResourceProperties extends AWSResourceProperties {
	InternetGatewayId?:AWSStringProperty;
	VpcId:AWSStringProperty;
	VpnGatewayId?:AWSStringProperty;

}
