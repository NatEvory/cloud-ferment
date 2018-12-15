import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DocumentationPart extends AWSResource<DocumentationPart_ResourceProperties> {
	constructor(name:string,properties:DocumentationPart_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::DocumentationPart");
	}
}

export interface DocumentationPart_ResourceProperties extends AWSResourceProperties {
	Location:DocumentationPart_Location;
	Properties:AWSStringProperty;
	RestApiId:AWSStringProperty;

}
export interface DocumentationPart_Location {
	Method?:AWSStringProperty;
	Name?:AWSStringProperty;
	Path?:AWSStringProperty;
	StatusCode?:AWSStringProperty;
	Type?:AWSStringProperty;

}
