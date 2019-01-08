import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Authorizer extends AWSResource<Authorizer_ResourceProperties> {
	constructor(name:string,properties:Authorizer_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::Authorizer",dependsOn);
	}
}

export interface Authorizer_ResourceProperties extends AWSResourceProperties {
	AuthType?:AWSStringProperty;
	AuthorizerCredentials?:AWSStringProperty;
	AuthorizerResultTtlInSeconds?:number;
	AuthorizerUri?:AWSStringProperty;
	IdentitySource?:AWSStringProperty;
	IdentityValidationExpression?:AWSStringProperty;
	Name?:AWSStringProperty;
	ProviderARNs?:AWSStringListProperty;
	RestApiId:AWSStringProperty;
	Type?:AWSStringProperty;

}
