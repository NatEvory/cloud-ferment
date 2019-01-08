import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class InternetGateway extends AWSResource<InternetGateway_ResourceProperties> {
	constructor(name:string,properties:InternetGateway_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::InternetGateway",dependsOn);
	}
}

export interface InternetGateway_ResourceProperties extends AWSResourceProperties {
	Tags?:Tag[];

}
