import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class RestApi extends AWSResource<RestApi_ResourceProperties> {
    constructor(name: string, properties: RestApi_ResourceProperties, dependsOn?: string[]);
}
export interface RestApi_ResourceProperties extends AWSResourceProperties {
    ApiKeySourceType?: AWSStringProperty;
    BinaryMediaTypes?: AWSStringListProperty;
    Body?: any;
    BodyS3Location?: RestApi_S3Location;
    CloneFrom?: AWSStringProperty;
    Description?: AWSStringProperty;
    EndpointConfiguration?: RestApi_EndpointConfiguration;
    FailOnWarnings?: boolean;
    MinimumCompressionSize?: number;
    Name?: AWSStringProperty;
    Parameters?: {
        [key: string]: AWSStringProperty;
    };
    Policy?: any;
}
export interface RestApi_S3Location {
    Bucket?: AWSStringProperty;
    ETag?: AWSStringProperty;
    Key?: AWSStringProperty;
    Version?: AWSStringProperty;
}
export interface RestApi_EndpointConfiguration {
    Types?: AWSStringListProperty;
}
