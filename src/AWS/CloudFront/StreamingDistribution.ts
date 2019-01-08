import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class StreamingDistribution extends AWSResource<StreamingDistribution_ResourceProperties> {
	constructor(name:string,properties:StreamingDistribution_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudFront::StreamingDistribution",dependsOn);
	}
}

export interface StreamingDistribution_ResourceProperties extends AWSResourceProperties {
	StreamingDistributionConfig:StreamingDistribution_StreamingDistributionConfig;
	Tags:Tag[];

}
export interface StreamingDistribution_TrustedSigners {
	Enabled:boolean;
	AwsAccountNumbers?:AWSStringListProperty;

}
export interface StreamingDistribution_S3Origin {
	DomainName:AWSStringProperty;
	OriginAccessIdentity:AWSStringProperty;

}
export interface StreamingDistribution_Logging {
	Bucket:AWSStringProperty;
	Enabled:boolean;
	Prefix:AWSStringProperty;

}
export interface StreamingDistribution_StreamingDistributionConfig {
	Logging?:StreamingDistribution_Logging;
	Comment:AWSStringProperty;
	PriceClass?:AWSStringProperty;
	S3Origin:StreamingDistribution_S3Origin;
	Enabled:boolean;
	Aliases?:AWSStringListProperty;
	TrustedSigners:StreamingDistribution_TrustedSigners;

}
