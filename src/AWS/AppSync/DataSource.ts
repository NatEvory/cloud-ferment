import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DataSource extends AWSResource<DataSource_ResourceProperties> {
	constructor(name:string,properties:DataSource_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AppSync::DataSource",dependsOn);
	}
}

export interface DataSource_ResourceProperties extends AWSResourceProperties {
	Type:AWSStringProperty;
	Description?:AWSStringProperty;
	ServiceRoleArn?:AWSStringProperty;
	HttpConfig?:DataSource_HttpConfig;
	RelationalDatabaseConfig?:DataSource_RelationalDatabaseConfig;
	LambdaConfig?:DataSource_LambdaConfig;
	ApiId:AWSStringProperty;
	Name:AWSStringProperty;
	DynamoDBConfig?:DataSource_DynamoDBConfig;
	ElasticsearchConfig?:DataSource_ElasticsearchConfig;

}
export interface DataSource_AuthorizationConfig {
	AwsIamConfig?:DataSource_AwsIamConfig;
	AuthorizationType:AWSStringProperty;

}
export interface DataSource_RelationalDatabaseConfig {
	RdsHttpEndpointConfig?:DataSource_RdsHttpEndpointConfig;
	RelationalDatabaseSourceType:AWSStringProperty;

}
export interface DataSource_RdsHttpEndpointConfig {
	AwsRegion:AWSStringProperty;
	Schema?:AWSStringProperty;
	DatabaseName?:AWSStringProperty;
	DbClusterIdentifier:AWSStringProperty;
	AwsSecretStoreArn:AWSStringProperty;

}
export interface DataSource_LambdaConfig {
	LambdaFunctionArn:AWSStringProperty;

}
export interface DataSource_AwsIamConfig {
	SigningRegion?:AWSStringProperty;
	SigningServiceName?:AWSStringProperty;

}
export interface DataSource_HttpConfig {
	Endpoint:AWSStringProperty;
	AuthorizationConfig?:DataSource_AuthorizationConfig;

}
export interface DataSource_DynamoDBConfig {
	TableName:AWSStringProperty;
	AwsRegion:AWSStringProperty;
	UseCallerCredentials?:boolean;

}
export interface DataSource_ElasticsearchConfig {
	AwsRegion:AWSStringProperty;
	Endpoint:AWSStringProperty;

}
