import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ClientCertificate extends AWSResource<ClientCertificate_ResourceProperties> {
	constructor(name:string,properties:ClientCertificate_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::ClientCertificate");
	}
}

export interface ClientCertificate_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;

}
