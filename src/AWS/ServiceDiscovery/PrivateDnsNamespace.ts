import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PrivateDnsNamespace extends AWSResource<PrivateDnsNamespace_ResourceProperties> {
	constructor(name:string,properties:PrivateDnsNamespace_ResourceProperties){
		super(name,properties,"AWS::ServiceDiscovery::PrivateDnsNamespace");
	}
}

export interface PrivateDnsNamespace_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	Vpc:AWSStringProperty;
	Name:AWSStringProperty;

}
