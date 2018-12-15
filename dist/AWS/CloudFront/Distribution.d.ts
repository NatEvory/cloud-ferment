import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Distribution extends AWSResource<Distribution_ResourceProperties> {
    constructor(name: string, properties: Distribution_ResourceProperties);
}
export interface Distribution_ResourceProperties extends AWSResourceProperties {
    DistributionConfig: Distribution_DistributionConfig;
    Tags?: Tag[];
}
export interface Distribution_Cookies {
    WhitelistedNames?: AWSStringListProperty;
    Forward: AWSStringProperty;
}
export interface Distribution_LambdaFunctionAssociation {
    EventType?: AWSStringProperty;
    LambdaFunctionARN?: AWSStringProperty;
}
export interface Distribution_CustomOriginConfig {
    OriginReadTimeout?: number;
    HTTPSPort?: number;
    OriginKeepaliveTimeout?: number;
    OriginSSLProtocols?: AWSStringListProperty;
    HTTPPort?: number;
    OriginProtocolPolicy: AWSStringProperty;
}
export interface Distribution_ForwardedValues {
    Cookies?: Distribution_Cookies;
    Headers?: AWSStringListProperty;
    QueryString: boolean;
    QueryStringCacheKeys?: AWSStringListProperty;
}
export interface Distribution_CacheBehavior {
    Compress?: boolean;
    LambdaFunctionAssociations?: Distribution_LambdaFunctionAssociation[];
    TargetOriginId: AWSStringProperty;
    ViewerProtocolPolicy: AWSStringProperty;
    TrustedSigners?: AWSStringListProperty;
    DefaultTTL?: number;
    FieldLevelEncryptionId?: AWSStringProperty;
    AllowedMethods?: AWSStringListProperty;
    PathPattern: AWSStringProperty;
    CachedMethods?: AWSStringListProperty;
    SmoothStreaming?: boolean;
    ForwardedValues: Distribution_ForwardedValues;
    MinTTL?: number;
    MaxTTL?: number;
}
export interface Distribution_DefaultCacheBehavior {
    Compress?: boolean;
    LambdaFunctionAssociations?: Distribution_LambdaFunctionAssociation[];
    TargetOriginId: AWSStringProperty;
    ViewerProtocolPolicy: AWSStringProperty;
    TrustedSigners?: AWSStringListProperty;
    DefaultTTL?: number;
    FieldLevelEncryptionId?: AWSStringProperty;
    AllowedMethods?: AWSStringListProperty;
    CachedMethods?: AWSStringListProperty;
    SmoothStreaming?: boolean;
    ForwardedValues: Distribution_ForwardedValues;
    MinTTL?: number;
    MaxTTL?: number;
}
export interface Distribution_Restrictions {
    GeoRestriction: Distribution_GeoRestriction;
}
export interface Distribution_Origin {
    OriginCustomHeaders?: Distribution_OriginCustomHeader[];
    DomainName: AWSStringProperty;
    S3OriginConfig?: Distribution_S3OriginConfig;
    OriginPath?: AWSStringProperty;
    Id: AWSStringProperty;
    CustomOriginConfig?: Distribution_CustomOriginConfig;
}
export interface Distribution_GeoRestriction {
    Locations?: AWSStringListProperty;
    RestrictionType: AWSStringProperty;
}
export interface Distribution_ViewerCertificate {
    IamCertificateId?: AWSStringProperty;
    SslSupportMethod?: AWSStringProperty;
    MinimumProtocolVersion?: AWSStringProperty;
    CloudFrontDefaultCertificate?: boolean;
    AcmCertificateArn?: AWSStringProperty;
}
export interface Distribution_S3OriginConfig {
    OriginAccessIdentity?: AWSStringProperty;
}
export interface Distribution_CustomErrorResponse {
    ResponseCode?: number;
    ErrorCachingMinTTL?: number;
    ErrorCode: number;
    ResponsePagePath?: AWSStringProperty;
}
export interface Distribution_Logging {
    IncludeCookies?: boolean;
    Bucket: AWSStringProperty;
    Prefix?: AWSStringProperty;
}
export interface Distribution_DistributionConfig {
    Logging?: Distribution_Logging;
    Comment?: AWSStringProperty;
    DefaultRootObject?: AWSStringProperty;
    Origins?: Distribution_Origin[];
    ViewerCertificate?: Distribution_ViewerCertificate;
    PriceClass?: AWSStringProperty;
    DefaultCacheBehavior?: Distribution_DefaultCacheBehavior;
    CustomErrorResponses?: Distribution_CustomErrorResponse[];
    Enabled: boolean;
    Aliases?: AWSStringListProperty;
    IPV6Enabled?: boolean;
    WebACLId?: AWSStringProperty;
    HttpVersion?: AWSStringProperty;
    Restrictions?: Distribution_Restrictions;
    CacheBehaviors?: Distribution_CacheBehavior[];
}
export interface Distribution_OriginCustomHeader {
    HeaderValue: AWSStringProperty;
    HeaderName: AWSStringProperty;
}
