import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Bucket extends AWSResource<Bucket_ResourceProperties> {
    constructor(name: string, properties: Bucket_ResourceProperties);
}
export interface Bucket_ResourceProperties extends AWSResourceProperties {
    AccelerateConfiguration?: Bucket_AccelerateConfiguration;
    AccessControl?: AWSStringProperty;
    AnalyticsConfigurations?: Bucket_AnalyticsConfiguration[];
    BucketEncryption?: Bucket_BucketEncryption;
    BucketName?: AWSStringProperty;
    CorsConfiguration?: Bucket_CorsConfiguration;
    InventoryConfigurations?: Bucket_InventoryConfiguration[];
    LifecycleConfiguration?: Bucket_LifecycleConfiguration;
    LoggingConfiguration?: Bucket_LoggingConfiguration;
    MetricsConfigurations?: Bucket_MetricsConfiguration[];
    NotificationConfiguration?: Bucket_NotificationConfiguration;
    PublicAccessBlockConfiguration?: Bucket_PublicAccessBlockConfiguration;
    ReplicationConfiguration?: Bucket_ReplicationConfiguration;
    Tags?: Tag[];
    VersioningConfiguration?: Bucket_VersioningConfiguration;
    WebsiteConfiguration?: Bucket_WebsiteConfiguration;
}
export interface Bucket_BucketEncryption {
    ServerSideEncryptionConfiguration: Bucket_ServerSideEncryptionRule[];
}
export interface Bucket_NotificationFilter {
    S3Key: Bucket_S3KeyFilter;
}
export interface Bucket_RoutingRuleCondition {
    HttpErrorCodeReturnedEquals?: AWSStringProperty;
    KeyPrefixEquals?: AWSStringProperty;
}
export interface Bucket_LifecycleConfiguration {
    Rules: Bucket_Rule[];
}
export interface Bucket_LambdaConfiguration {
    Event: AWSStringProperty;
    Filter?: Bucket_NotificationFilter;
    Function: AWSStringProperty;
}
export interface Bucket_ReplicationRule {
    Destination: Bucket_ReplicationDestination;
    Id?: AWSStringProperty;
    Prefix: AWSStringProperty;
    SourceSelectionCriteria?: Bucket_SourceSelectionCriteria;
    Status: AWSStringProperty;
}
export interface Bucket_CorsRule {
    AllowedHeaders?: AWSStringListProperty;
    AllowedMethods: AWSStringListProperty;
    AllowedOrigins: AWSStringListProperty;
    ExposedHeaders?: AWSStringListProperty;
    Id?: AWSStringProperty;
    MaxAge?: number;
}
export interface Bucket_Destination {
    BucketAccountId?: AWSStringProperty;
    BucketArn: AWSStringProperty;
    Format: AWSStringProperty;
    Prefix?: AWSStringProperty;
}
export interface Bucket_ServerSideEncryptionRule {
    ServerSideEncryptionByDefault?: Bucket_ServerSideEncryptionByDefault;
}
export interface Bucket_AnalyticsConfiguration {
    Id: AWSStringProperty;
    Prefix?: AWSStringProperty;
    StorageClassAnalysis: Bucket_StorageClassAnalysis;
    TagFilters?: Bucket_TagFilter[];
}
export interface Bucket_SourceSelectionCriteria {
    SseKmsEncryptedObjects: Bucket_SseKmsEncryptedObjects;
}
export interface Bucket_LoggingConfiguration {
    DestinationBucketName?: AWSStringProperty;
    LogFilePrefix?: AWSStringProperty;
}
export interface Bucket_StorageClassAnalysis {
    DataExport?: Bucket_DataExport;
}
export interface Bucket_RoutingRule {
    RedirectRule: Bucket_RedirectRule;
    RoutingRuleCondition?: Bucket_RoutingRuleCondition;
}
export interface Bucket_AccessControlTranslation {
    Owner: AWSStringProperty;
}
export interface Bucket_VersioningConfiguration {
    Status: AWSStringProperty;
}
export interface Bucket_EncryptionConfiguration {
    ReplicaKmsKeyID: AWSStringProperty;
}
export interface Bucket_NotificationConfiguration {
    LambdaConfigurations?: Bucket_LambdaConfiguration[];
    QueueConfigurations?: Bucket_QueueConfiguration[];
    TopicConfigurations?: Bucket_TopicConfiguration[];
}
export interface Bucket_ServerSideEncryptionByDefault {
    KMSMasterKeyID?: AWSStringProperty;
    SSEAlgorithm: AWSStringProperty;
}
export interface Bucket_RedirectRule {
    HostName?: AWSStringProperty;
    HttpRedirectCode?: AWSStringProperty;
    Protocol?: AWSStringProperty;
    ReplaceKeyPrefixWith?: AWSStringProperty;
    ReplaceKeyWith?: AWSStringProperty;
}
export interface Bucket_RedirectAllRequestsTo {
    HostName: AWSStringProperty;
    Protocol?: AWSStringProperty;
}
export interface Bucket_S3KeyFilter {
    Rules: Bucket_FilterRule[];
}
export interface Bucket_InventoryConfiguration {
    Destination: Bucket_Destination;
    Enabled: boolean;
    Id: AWSStringProperty;
    IncludedObjectVersions: AWSStringProperty;
    OptionalFields?: AWSStringListProperty;
    Prefix?: AWSStringProperty;
    ScheduleFrequency: AWSStringProperty;
}
export interface Bucket_WebsiteConfiguration {
    ErrorDocument?: AWSStringProperty;
    IndexDocument?: AWSStringProperty;
    RedirectAllRequestsTo?: Bucket_RedirectAllRequestsTo;
    RoutingRules?: Bucket_RoutingRule[];
}
export interface Bucket_ReplicationConfiguration {
    Role: AWSStringProperty;
    Rules: Bucket_ReplicationRule[];
}
export interface Bucket_SseKmsEncryptedObjects {
    Status: AWSStringProperty;
}
export interface Bucket_Rule {
    AbortIncompleteMultipartUpload?: Bucket_AbortIncompleteMultipartUpload;
    ExpirationDate?: Date;
    ExpirationInDays?: number;
    Id?: AWSStringProperty;
    NoncurrentVersionExpirationInDays?: number;
    NoncurrentVersionTransition?: Bucket_NoncurrentVersionTransition;
    NoncurrentVersionTransitions?: Bucket_NoncurrentVersionTransition[];
    Prefix?: AWSStringProperty;
    Status: AWSStringProperty;
    TagFilters?: Bucket_TagFilter[];
    Transition?: Bucket_Transition;
    Transitions?: Bucket_Transition[];
}
export interface Bucket_QueueConfiguration {
    Event: AWSStringProperty;
    Filter?: Bucket_NotificationFilter;
    Queue: AWSStringProperty;
}
export interface Bucket_TopicConfiguration {
    Event: AWSStringProperty;
    Filter?: Bucket_NotificationFilter;
    Topic: AWSStringProperty;
}
export interface Bucket_MetricsConfiguration {
    Id: AWSStringProperty;
    Prefix?: AWSStringProperty;
    TagFilters?: Bucket_TagFilter[];
}
export interface Bucket_TagFilter {
    Key: AWSStringProperty;
    Value: AWSStringProperty;
}
export interface Bucket_Transition {
    StorageClass: AWSStringProperty;
    TransitionDate?: Date;
    TransitionInDays?: number;
}
export interface Bucket_DataExport {
    Destination: Bucket_Destination;
    OutputSchemaVersion: AWSStringProperty;
}
export interface Bucket_CorsConfiguration {
    CorsRules: Bucket_CorsRule[];
}
export interface Bucket_ReplicationDestination {
    AccessControlTranslation?: Bucket_AccessControlTranslation;
    Account?: AWSStringProperty;
    Bucket: AWSStringProperty;
    EncryptionConfiguration?: Bucket_EncryptionConfiguration;
    StorageClass?: AWSStringProperty;
}
export interface Bucket_AccelerateConfiguration {
    AccelerationStatus: AWSStringProperty;
}
export interface Bucket_NoncurrentVersionTransition {
    StorageClass: AWSStringProperty;
    TransitionInDays: number;
}
export interface Bucket_AbortIncompleteMultipartUpload {
    DaysAfterInitiation: number;
}
export interface Bucket_FilterRule {
    Name: AWSStringProperty;
    Value: AWSStringProperty;
}
export interface Bucket_PublicAccessBlockConfiguration {
    BlockPublicAcls?: boolean;
    BlockPublicPolicy?: boolean;
    IgnorePublicAcls?: boolean;
    RestrictPublicBuckets?: boolean;
}
