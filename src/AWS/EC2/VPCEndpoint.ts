import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCEndpoint extends AWSResource<VPCEndpoint_ResourceProperties> {
	constructor(name:string,properties:VPCEndpoint_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPCEndpoint",dependsOn);
	}
}

export interface VPCEndpoint_ResourceProperties extends AWSResourceProperties {
	PolicyDocument?:any;
	PrivateDnsEnabled?:boolean;
	RouteTableIds?:AWSStringListProperty;
	SecurityGroupIds?:AWSStringListProperty;
	ServiceName:AWSStringProperty;
	SubnetIds?:AWSStringListProperty;
	VPCEndpointType?:AWSStringProperty;
	VpcId:AWSStringProperty;

}
