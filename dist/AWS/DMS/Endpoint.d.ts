import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Endpoint extends AWSResource<Endpoint_ResourceProperties> {
    constructor(name: string, properties: Endpoint_ResourceProperties, dependsOn?: string[]);
}
export interface Endpoint_ResourceProperties extends AWSResourceProperties {
    KmsKeyId?: AWSStringProperty;
    Port?: number;
    DatabaseName?: AWSStringProperty;
    ElasticsearchSettings?: Endpoint_ElasticsearchSettings;
    S3Settings?: Endpoint_S3Settings;
    EngineName: AWSStringProperty;
    DynamoDbSettings?: Endpoint_DynamoDbSettings;
    KinesisSettings?: Endpoint_KinesisSettings;
    Username?: AWSStringProperty;
    SslMode?: AWSStringProperty;
    ServerName?: AWSStringProperty;
    ExtraConnectionAttributes?: AWSStringProperty;
    EndpointType: AWSStringProperty;
    Tags?: Tag[];
    EndpointIdentifier?: AWSStringProperty;
    Password?: AWSStringProperty;
    CertificateArn?: AWSStringProperty;
    MongoDbSettings?: Endpoint_MongoDbSettings;
}
export interface Endpoint_KinesisSettings {
    MessageFormat?: AWSStringProperty;
    StreamArn?: AWSStringProperty;
    ServiceAccessRoleArn?: AWSStringProperty;
}
export interface Endpoint_S3Settings {
    ExternalTableDefinition?: AWSStringProperty;
    BucketName?: AWSStringProperty;
    BucketFolder?: AWSStringProperty;
    CsvRowDelimiter?: AWSStringProperty;
    CsvDelimiter?: AWSStringProperty;
    ServiceAccessRoleArn?: AWSStringProperty;
    CompressionType?: AWSStringProperty;
}
export interface Endpoint_MongoDbSettings {
    AuthSource?: AWSStringProperty;
    AuthMechanism?: AWSStringProperty;
    Username?: AWSStringProperty;
    DocsToInvestigate?: AWSStringProperty;
    ServerName?: AWSStringProperty;
    Port?: number;
    ExtractDocId?: AWSStringProperty;
    DatabaseName?: AWSStringProperty;
    AuthType?: AWSStringProperty;
    Password?: AWSStringProperty;
    NestingLevel?: AWSStringProperty;
}
export interface Endpoint_ElasticsearchSettings {
    EndpointUri?: AWSStringProperty;
    FullLoadErrorPercentage?: number;
    ErrorRetryDuration?: number;
    ServiceAccessRoleArn?: AWSStringProperty;
}
export interface Endpoint_DynamoDbSettings {
    ServiceAccessRoleArn?: AWSStringProperty;
}
