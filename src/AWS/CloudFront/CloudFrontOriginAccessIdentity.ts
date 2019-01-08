import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CloudFrontOriginAccessIdentity extends AWSResource<CloudFrontOriginAccessIdentity_ResourceProperties> {
	constructor(name:string,properties:CloudFrontOriginAccessIdentity_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudFront::CloudFrontOriginAccessIdentity",dependsOn);
	}
}

export interface CloudFrontOriginAccessIdentity_ResourceProperties extends AWSResourceProperties {
	CloudFrontOriginAccessIdentityConfig:CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig;

}
export interface CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig {
	Comment:AWSStringProperty;

}
