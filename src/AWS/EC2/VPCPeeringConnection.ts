import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCPeeringConnection extends AWSResource<VPCPeeringConnection_ResourceProperties> {
	constructor(name:string,properties:VPCPeeringConnection_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPCPeeringConnection",dependsOn);
	}
}

export interface VPCPeeringConnection_ResourceProperties extends AWSResourceProperties {
	PeerOwnerId?:AWSStringProperty;
	PeerRegion?:AWSStringProperty;
	PeerRoleArn?:AWSStringProperty;
	PeerVpcId:AWSStringProperty;
	Tags?:Tag[];
	VpcId:AWSStringProperty;

}
