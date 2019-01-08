import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class GraphQLApi extends AWSResource<GraphQLApi_ResourceProperties> {
    constructor(name: string, properties: GraphQLApi_ResourceProperties, dependsOn?: string[]);
}
export interface GraphQLApi_ResourceProperties extends AWSResourceProperties {
    OpenIDConnectConfig?: GraphQLApi_OpenIDConnectConfig;
    UserPoolConfig?: GraphQLApi_UserPoolConfig;
    Name: AWSStringProperty;
    AuthenticationType: AWSStringProperty;
    LogConfig?: GraphQLApi_LogConfig;
}
export interface GraphQLApi_OpenIDConnectConfig {
    Issuer?: AWSStringProperty;
    ClientId?: AWSStringProperty;
    AuthTTL?: number;
    IatTTL?: number;
}
export interface GraphQLApi_LogConfig {
    CloudWatchLogsRoleArn?: AWSStringProperty;
    FieldLogLevel?: AWSStringProperty;
}
export interface GraphQLApi_UserPoolConfig {
    AppIdClientRegex?: AWSStringProperty;
    UserPoolId?: AWSStringProperty;
    AwsRegion?: AWSStringProperty;
    DefaultAction?: AWSStringProperty;
}
