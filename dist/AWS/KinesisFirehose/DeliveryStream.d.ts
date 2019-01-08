import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DeliveryStream extends AWSResource<DeliveryStream_ResourceProperties> {
    constructor(name: string, properties: DeliveryStream_ResourceProperties, dependsOn?: string[]);
}
export interface DeliveryStream_ResourceProperties extends AWSResourceProperties {
    DeliveryStreamName?: AWSStringProperty;
    DeliveryStreamType?: AWSStringProperty;
    ElasticsearchDestinationConfiguration?: DeliveryStream_ElasticsearchDestinationConfiguration;
    ExtendedS3DestinationConfiguration?: DeliveryStream_ExtendedS3DestinationConfiguration;
    KinesisStreamSourceConfiguration?: DeliveryStream_KinesisStreamSourceConfiguration;
    RedshiftDestinationConfiguration?: DeliveryStream_RedshiftDestinationConfiguration;
    S3DestinationConfiguration?: DeliveryStream_S3DestinationConfiguration;
    SplunkDestinationConfiguration?: DeliveryStream_SplunkDestinationConfiguration;
}
export interface DeliveryStream_ElasticsearchDestinationConfiguration {
    BufferingHints: DeliveryStream_ElasticsearchBufferingHints;
    CloudWatchLoggingOptions?: DeliveryStream_CloudWatchLoggingOptions;
    DomainARN: AWSStringProperty;
    IndexName: AWSStringProperty;
    IndexRotationPeriod: AWSStringProperty;
    ProcessingConfiguration?: DeliveryStream_ProcessingConfiguration;
    RetryOptions: DeliveryStream_ElasticsearchRetryOptions;
    RoleARN: AWSStringProperty;
    S3BackupMode: AWSStringProperty;
    S3Configuration: DeliveryStream_S3DestinationConfiguration;
    TypeName: AWSStringProperty;
}
export interface DeliveryStream_ElasticsearchBufferingHints {
    IntervalInSeconds: number;
    SizeInMBs: number;
}
export interface DeliveryStream_SplunkDestinationConfiguration {
    CloudWatchLoggingOptions?: DeliveryStream_CloudWatchLoggingOptions;
    HECAcknowledgmentTimeoutInSeconds?: number;
    HECEndpoint: AWSStringProperty;
    HECEndpointType: AWSStringProperty;
    HECToken: AWSStringProperty;
    ProcessingConfiguration?: DeliveryStream_ProcessingConfiguration;
    RetryOptions?: DeliveryStream_SplunkRetryOptions;
    S3BackupMode?: AWSStringProperty;
    S3Configuration: DeliveryStream_S3DestinationConfiguration;
}
export interface DeliveryStream_EncryptionConfiguration {
    KMSEncryptionConfig?: DeliveryStream_KMSEncryptionConfig;
    NoEncryptionConfig?: AWSStringProperty;
}
export interface DeliveryStream_CloudWatchLoggingOptions {
    Enabled?: boolean;
    LogGroupName?: AWSStringProperty;
    LogStreamName?: AWSStringProperty;
}
export interface DeliveryStream_ProcessingConfiguration {
    Enabled?: boolean;
    Processors?: DeliveryStream_Processor[];
}
export interface DeliveryStream_BufferingHints {
    IntervalInSeconds: number;
    SizeInMBs: number;
}
export interface DeliveryStream_SplunkRetryOptions {
    DurationInSeconds: number;
}
export interface DeliveryStream_KinesisStreamSourceConfiguration {
    KinesisStreamARN: AWSStringProperty;
    RoleARN: AWSStringProperty;
}
export interface DeliveryStream_ProcessorParameter {
    ParameterName: AWSStringProperty;
    ParameterValue: AWSStringProperty;
}
export interface DeliveryStream_Processor {
    Parameters: DeliveryStream_ProcessorParameter[];
    Type: AWSStringProperty;
}
export interface DeliveryStream_CopyCommand {
    CopyOptions?: AWSStringProperty;
    DataTableColumns?: AWSStringProperty;
    DataTableName: AWSStringProperty;
}
export interface DeliveryStream_S3DestinationConfiguration {
    BucketARN: AWSStringProperty;
    BufferingHints: DeliveryStream_BufferingHints;
    CloudWatchLoggingOptions?: DeliveryStream_CloudWatchLoggingOptions;
    CompressionFormat: AWSStringProperty;
    EncryptionConfiguration?: DeliveryStream_EncryptionConfiguration;
    Prefix?: AWSStringProperty;
    RoleARN: AWSStringProperty;
}
export interface DeliveryStream_ElasticsearchRetryOptions {
    DurationInSeconds: number;
}
export interface DeliveryStream_KMSEncryptionConfig {
    AWSKMSKeyARN: AWSStringProperty;
}
export interface DeliveryStream_ExtendedS3DestinationConfiguration {
    BucketARN: AWSStringProperty;
    BufferingHints: DeliveryStream_BufferingHints;
    CloudWatchLoggingOptions?: DeliveryStream_CloudWatchLoggingOptions;
    CompressionFormat: AWSStringProperty;
    EncryptionConfiguration?: DeliveryStream_EncryptionConfiguration;
    Prefix: AWSStringProperty;
    ProcessingConfiguration?: DeliveryStream_ProcessingConfiguration;
    RoleARN: AWSStringProperty;
    S3BackupConfiguration?: DeliveryStream_S3DestinationConfiguration;
    S3BackupMode?: AWSStringProperty;
}
export interface DeliveryStream_RedshiftDestinationConfiguration {
    CloudWatchLoggingOptions?: DeliveryStream_CloudWatchLoggingOptions;
    ClusterJDBCURL: AWSStringProperty;
    CopyCommand: DeliveryStream_CopyCommand;
    Password: AWSStringProperty;
    ProcessingConfiguration?: DeliveryStream_ProcessingConfiguration;
    RoleARN: AWSStringProperty;
    S3Configuration: DeliveryStream_S3DestinationConfiguration;
    Username: AWSStringProperty;
}
