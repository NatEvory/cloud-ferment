import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CustomerGateway extends AWSResource<CustomerGateway_ResourceProperties> {
	constructor(name:string,properties:CustomerGateway_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::CustomerGateway",dependsOn);
	}
}

export interface CustomerGateway_ResourceProperties extends AWSResourceProperties {
	BgpAsn:number;
	IpAddress:AWSStringProperty;
	Tags?:Tag[];
	Type:AWSStringProperty;

}
