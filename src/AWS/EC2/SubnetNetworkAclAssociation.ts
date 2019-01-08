import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SubnetNetworkAclAssociation extends AWSResource<SubnetNetworkAclAssociation_ResourceProperties> {
	constructor(name:string,properties:SubnetNetworkAclAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::SubnetNetworkAclAssociation",dependsOn);
	}
}

export interface SubnetNetworkAclAssociation_ResourceProperties extends AWSResourceProperties {
	NetworkAclId:AWSStringProperty;
	SubnetId:AWSStringProperty;

}
