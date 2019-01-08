import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class GatewayResponse extends AWSResource<GatewayResponse_ResourceProperties> {
	constructor(name:string,properties:GatewayResponse_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::GatewayResponse",dependsOn);
	}
}

export interface GatewayResponse_ResourceProperties extends AWSResourceProperties {
	ResponseParameters?:{[key:string]:AWSStringProperty};
	ResponseTemplates?:{[key:string]:AWSStringProperty};
	ResponseType:AWSStringProperty;
	RestApiId:AWSStringProperty;
	StatusCode?:AWSStringProperty;

}
