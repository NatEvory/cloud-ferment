import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Endpoint extends AWSResource<Endpoint_ResourceProperties> {
	constructor(name:string,properties:Endpoint_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DMS::Endpoint",dependsOn);
	}
}

export interface Endpoint_ResourceProperties extends AWSResourceProperties {
	KmsKeyId?:AWSStringProperty;
	Port?:number;
	DatabaseName?:AWSStringProperty;
	S3Settings?:Endpoint_S3Settings;
	EngineName:AWSStringProperty;
	DynamoDbSettings?:Endpoint_DynamoDbSettings;
	Username?:AWSStringProperty;
	SslMode?:AWSStringProperty;
	ServerName?:AWSStringProperty;
	ExtraConnectionAttributes?:AWSStringProperty;
	EndpointType:AWSStringProperty;
	Tags?:Tag[];
	EndpointIdentifier?:AWSStringProperty;
	Password?:AWSStringProperty;
	CertificateArn?:AWSStringProperty;
	MongoDbSettings?:Endpoint_MongoDbSettings;

}
export interface Endpoint_S3Settings {
	ExternalTableDefinition?:AWSStringProperty;
	BucketName?:AWSStringProperty;
	BucketFolder?:AWSStringProperty;
	CsvRowDelimiter?:AWSStringProperty;
	CsvDelimiter?:AWSStringProperty;
	ServiceAccessRoleArn?:AWSStringProperty;
	CompressionType?:AWSStringProperty;

}
export interface Endpoint_MongoDbSettings {
	AuthSource?:AWSStringProperty;
	AuthMechanism?:AWSStringProperty;
	Username?:AWSStringProperty;
	DocsToInvestigate?:AWSStringProperty;
	ServerName?:AWSStringProperty;
	Port?:number;
	ExtractDocId?:AWSStringProperty;
	DatabaseName?:AWSStringProperty;
	AuthType?:AWSStringProperty;
	Password?:AWSStringProperty;
	NestingLevel?:AWSStringProperty;

}
export interface Endpoint_DynamoDbSettings {
	ServiceAccessRoleArn?:AWSStringProperty;

}
