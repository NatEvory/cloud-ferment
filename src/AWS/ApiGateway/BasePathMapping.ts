import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class BasePathMapping extends AWSResource<BasePathMapping_ResourceProperties> {
	constructor(name:string,properties:BasePathMapping_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::BasePathMapping",dependsOn);
	}
}

export interface BasePathMapping_ResourceProperties extends AWSResourceProperties {
	BasePath?:AWSStringProperty;
	DomainName:AWSStringProperty;
	RestApiId?:AWSStringProperty;
	Stage?:AWSStringProperty;

}
