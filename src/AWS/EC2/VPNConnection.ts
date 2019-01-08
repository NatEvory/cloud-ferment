import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPNConnection extends AWSResource<VPNConnection_ResourceProperties> {
	constructor(name:string,properties:VPNConnection_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPNConnection",dependsOn);
	}
}

export interface VPNConnection_ResourceProperties extends AWSResourceProperties {
	CustomerGatewayId:AWSStringProperty;
	StaticRoutesOnly?:boolean;
	Tags?:Tag[];
	Type:AWSStringProperty;
	VpnGatewayId:AWSStringProperty;
	VpnTunnelOptionsSpecifications?:VPNConnection_VpnTunnelOptionsSpecification[];

}
export interface VPNConnection_VpnTunnelOptionsSpecification {
	PreSharedKey?:AWSStringProperty;
	TunnelInsideCidr?:AWSStringProperty;

}
