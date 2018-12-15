import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPNGateway extends AWSResource<VPNGateway_ResourceProperties> {
	constructor(name:string,properties:VPNGateway_ResourceProperties){
		super(name,properties,"AWS::EC2::VPNGateway");
	}
}

export interface VPNGateway_ResourceProperties extends AWSResourceProperties {
	AmazonSideAsn?:number;
	Tags?:Tag[];
	Type:AWSStringProperty;

}
