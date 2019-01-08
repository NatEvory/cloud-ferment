import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NatGateway extends AWSResource<NatGateway_ResourceProperties> {
	constructor(name:string,properties:NatGateway_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::NatGateway",dependsOn);
	}
}

export interface NatGateway_ResourceProperties extends AWSResourceProperties {
	AllocationId:AWSStringProperty;
	SubnetId:AWSStringProperty;
	Tags?:Tag[];

}
