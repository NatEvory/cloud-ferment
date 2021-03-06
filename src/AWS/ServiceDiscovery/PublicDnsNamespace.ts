import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PublicDnsNamespace extends AWSResource<PublicDnsNamespace_ResourceProperties> {
	constructor(name:string,properties:PublicDnsNamespace_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceDiscovery::PublicDnsNamespace",dependsOn);
	}
}

export interface PublicDnsNamespace_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	Name:AWSStringProperty;

}
