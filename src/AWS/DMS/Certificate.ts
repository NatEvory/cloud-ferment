import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Certificate extends AWSResource<Certificate_ResourceProperties> {
	constructor(name:string,properties:Certificate_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DMS::Certificate",dependsOn);
	}
}

export interface Certificate_ResourceProperties extends AWSResourceProperties {
	CertificateIdentifier?:AWSStringProperty;
	CertificatePem?:AWSStringProperty;
	CertificateWallet?:AWSStringProperty;

}
