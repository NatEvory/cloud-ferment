import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Stage extends AWSResource<Stage_ResourceProperties> {
    constructor(name: string, properties: Stage_ResourceProperties);
}
export interface Stage_ResourceProperties extends AWSResourceProperties {
    AccessLogSetting?: Stage_AccessLogSetting;
    CacheClusterEnabled?: boolean;
    CacheClusterSize?: AWSStringProperty;
    CanarySetting?: Stage_CanarySetting;
    ClientCertificateId?: AWSStringProperty;
    DeploymentId?: AWSStringProperty;
    Description?: AWSStringProperty;
    DocumentationVersion?: AWSStringProperty;
    MethodSettings?: Stage_MethodSetting[];
    RestApiId: AWSStringProperty;
    StageName?: AWSStringProperty;
    Tags?: Tag[];
    TracingEnabled?: boolean;
    Variables?: {
        [key: string]: AWSStringProperty;
    };
}
export interface Stage_MethodSetting {
    CacheDataEncrypted?: boolean;
    CacheTtlInSeconds?: number;
    CachingEnabled?: boolean;
    DataTraceEnabled?: boolean;
    HttpMethod?: AWSStringProperty;
    LoggingLevel?: AWSStringProperty;
    MetricsEnabled?: boolean;
    ResourcePath?: AWSStringProperty;
    ThrottlingBurstLimit?: number;
    ThrottlingRateLimit?: number;
}
export interface Stage_CanarySetting {
    DeploymentId?: AWSStringProperty;
    PercentTraffic?: number;
    StageVariableOverrides?: {
        [key: string]: AWSStringProperty;
    };
    UseStageCache?: boolean;
}
export interface Stage_AccessLogSetting {
    DestinationArn?: AWSStringProperty;
    Format?: AWSStringProperty;
}
