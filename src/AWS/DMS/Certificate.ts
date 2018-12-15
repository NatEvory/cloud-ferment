import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Certificate extends AWSResource<Certificate_ResourceProperties> {
	constructor(name:string,properties:Certificate_ResourceProperties){
		super(name,properties,"AWS::DMS::Certificate");
	}
}

export interface Certificate_ResourceProperties extends AWSResourceProperties {
	CertificateIdentifier?:AWSStringProperty;
	CertificatePem?:AWSStringProperty;
	CertificateWallet?:AWSStringProperty;

}
