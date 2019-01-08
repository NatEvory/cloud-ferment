import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Certificate extends AWSResource<Certificate_ResourceProperties> {
	constructor(name:string,properties:Certificate_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT::Certificate",dependsOn);
	}
}

export interface Certificate_ResourceProperties extends AWSResourceProperties {
	CertificateSigningRequest:AWSStringProperty;
	Status:AWSStringProperty;

}
