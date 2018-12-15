import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NetworkAcl extends AWSResource<NetworkAcl_ResourceProperties> {
	constructor(name:string,properties:NetworkAcl_ResourceProperties){
		super(name,properties,"AWS::EC2::NetworkAcl");
	}
}

export interface NetworkAcl_ResourceProperties extends AWSResourceProperties {
	Tags?:Tag[];
	VpcId:AWSStringProperty;

}
