import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ListenerCertificate extends AWSResource<ListenerCertificate_ResourceProperties> {
	constructor(name:string,properties:ListenerCertificate_ResourceProperties){
		super(name,properties,"AWS::ElasticLoadBalancingV2::ListenerCertificate");
	}
}

export interface ListenerCertificate_ResourceProperties extends AWSResourceProperties {
	Certificates:ListenerCertificate_Certificate[];
	ListenerArn:AWSStringProperty;

}
export interface ListenerCertificate_Certificate {
	CertificateArn?:AWSStringProperty;

}
