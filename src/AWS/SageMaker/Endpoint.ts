import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Endpoint extends AWSResource<Endpoint_ResourceProperties> {
	constructor(name:string,properties:Endpoint_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SageMaker::Endpoint",dependsOn);
	}
}

export interface Endpoint_ResourceProperties extends AWSResourceProperties {
	EndpointName?:AWSStringProperty;
	EndpointConfigName:AWSStringProperty;
	Tags?:Tag[];

}
