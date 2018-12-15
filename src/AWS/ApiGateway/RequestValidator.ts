import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class RequestValidator extends AWSResource<RequestValidator_ResourceProperties> {
	constructor(name:string,properties:RequestValidator_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::RequestValidator");
	}
}

export interface RequestValidator_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;
	RestApiId:AWSStringProperty;
	ValidateRequestBody?:boolean;
	ValidateRequestParameters?:boolean;

}
