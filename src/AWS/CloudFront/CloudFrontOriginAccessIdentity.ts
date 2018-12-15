import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CloudFrontOriginAccessIdentity extends AWSResource<CloudFrontOriginAccessIdentity_ResourceProperties> {
	constructor(name:string,properties:CloudFrontOriginAccessIdentity_ResourceProperties){
		super(name,properties,"AWS::CloudFront::CloudFrontOriginAccessIdentity");
	}
}

export interface CloudFrontOriginAccessIdentity_ResourceProperties extends AWSResourceProperties {
	CloudFrontOriginAccessIdentityConfig:CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig;

}
export interface CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig {
	Comment:AWSStringProperty;

}
