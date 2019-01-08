import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class CloudFrontOriginAccessIdentity extends AWSResource<CloudFrontOriginAccessIdentity_ResourceProperties> {
    constructor(name: string, properties: CloudFrontOriginAccessIdentity_ResourceProperties, dependsOn?: string[]);
}
export interface CloudFrontOriginAccessIdentity_ResourceProperties extends AWSResourceProperties {
    CloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig;
}
export interface CloudFrontOriginAccessIdentity_CloudFrontOriginAccessIdentityConfig {
    Comment: AWSStringProperty;
}
