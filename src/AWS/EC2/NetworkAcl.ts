import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NetworkAcl extends AWSResource<NetworkAcl_ResourceProperties> {
	constructor(name:string,properties:NetworkAcl_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::NetworkAcl",dependsOn);
	}
}

export interface NetworkAcl_ResourceProperties extends AWSResourceProperties {
	Tags?:Tag[];
	VpcId:AWSStringProperty;

}
