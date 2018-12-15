import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DomainName extends AWSResource<DomainName_ResourceProperties> {
	constructor(name:string,properties:DomainName_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::DomainName");
	}
}

export interface DomainName_ResourceProperties extends AWSResourceProperties {
	CertificateArn?:AWSStringProperty;
	DomainName:AWSStringProperty;
	EndpointConfiguration?:DomainName_EndpointConfiguration;
	RegionalCertificateArn?:AWSStringProperty;

}
export interface DomainName_EndpointConfiguration {
	Types?:AWSStringListProperty;

}
