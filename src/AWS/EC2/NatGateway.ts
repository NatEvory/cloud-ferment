import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NatGateway extends AWSResource<NatGateway_ResourceProperties> {
	constructor(name:string,properties:NatGateway_ResourceProperties){
		super(name,properties,"AWS::EC2::NatGateway");
	}
}

export interface NatGateway_ResourceProperties extends AWSResourceProperties {
	AllocationId:AWSStringProperty;
	SubnetId:AWSStringProperty;
	Tags?:Tag[];

}
