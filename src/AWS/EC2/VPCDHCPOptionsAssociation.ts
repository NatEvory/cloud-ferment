import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCDHCPOptionsAssociation extends AWSResource<VPCDHCPOptionsAssociation_ResourceProperties> {
	constructor(name:string,properties:VPCDHCPOptionsAssociation_ResourceProperties){
		super(name,properties,"AWS::EC2::VPCDHCPOptionsAssociation");
	}
}

export interface VPCDHCPOptionsAssociation_ResourceProperties extends AWSResourceProperties {
	DhcpOptionsId:AWSStringProperty;
	VpcId:AWSStringProperty;

}
