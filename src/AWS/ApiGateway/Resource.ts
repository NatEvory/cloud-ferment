import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Resource extends AWSResource<Resource_ResourceProperties> {
	constructor(name:string,properties:Resource_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::Resource",dependsOn);
	}
}

export interface Resource_ResourceProperties extends AWSResourceProperties {
	ParentId:AWSStringProperty;
	PathPart:AWSStringProperty;
	RestApiId:AWSStringProperty;

}
