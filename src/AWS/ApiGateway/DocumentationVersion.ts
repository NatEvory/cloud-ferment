import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DocumentationVersion extends AWSResource<DocumentationVersion_ResourceProperties> {
	constructor(name:string,properties:DocumentationVersion_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::DocumentationVersion",dependsOn);
	}
}

export interface DocumentationVersion_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	DocumentationVersion:AWSStringProperty;
	RestApiId:AWSStringProperty;

}
