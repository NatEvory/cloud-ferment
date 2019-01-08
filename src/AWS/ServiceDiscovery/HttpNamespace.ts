import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class HttpNamespace extends AWSResource<HttpNamespace_ResourceProperties> {
	constructor(name:string,properties:HttpNamespace_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceDiscovery::HttpNamespace",dependsOn);
	}
}

export interface HttpNamespace_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	Name:AWSStringProperty;

}
