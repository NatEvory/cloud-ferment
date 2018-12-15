import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Deployment extends AWSResource<Deployment_ResourceProperties> {
	constructor(name:string,properties:Deployment_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::Deployment");
	}
}

export interface Deployment_ResourceProperties extends AWSResourceProperties {
	DeploymentCanarySettings?:Deployment_DeploymentCanarySettings;
	Description?:AWSStringProperty;
	RestApiId:AWSStringProperty;
	StageDescription?:Deployment_StageDescription;
	StageName?:AWSStringProperty;

}
export interface Deployment_DeploymentCanarySettings {
	PercentTraffic?:number;
	StageVariableOverrides?:Map<string,AWSStringProperty>;
	UseStageCache?:boolean;

}
export interface Deployment_MethodSetting {
	CacheDataEncrypted?:boolean;
	CacheTtlInSeconds?:number;
	CachingEnabled?:boolean;
	DataTraceEnabled?:boolean;
	HttpMethod?:AWSStringProperty;
	LoggingLevel?:AWSStringProperty;
	MetricsEnabled?:boolean;
	ResourcePath?:AWSStringProperty;
	ThrottlingBurstLimit?:number;
	ThrottlingRateLimit?:number;

}
export interface Deployment_StageDescription {
	AccessLogSetting?:Deployment_AccessLogSetting;
	CacheClusterEnabled?:boolean;
	CacheClusterSize?:AWSStringProperty;
	CacheDataEncrypted?:boolean;
	CacheTtlInSeconds?:number;
	CachingEnabled?:boolean;
	CanarySetting?:Deployment_CanarySetting;
	ClientCertificateId?:AWSStringProperty;
	DataTraceEnabled?:boolean;
	Description?:AWSStringProperty;
	DocumentationVersion?:AWSStringProperty;
	LoggingLevel?:AWSStringProperty;
	MethodSettings?:Deployment_MethodSetting[];
	MetricsEnabled?:boolean;
	Tags?:Tag[];
	ThrottlingBurstLimit?:number;
	ThrottlingRateLimit?:number;
	TracingEnabled?:boolean;
	Variables?:Map<string,AWSStringProperty>;

}
export interface Deployment_CanarySetting {
	PercentTraffic?:number;
	StageVariableOverrides?:Map<string,AWSStringProperty>;
	UseStageCache?:boolean;

}
export interface Deployment_AccessLogSetting {
	DestinationArn?:AWSStringProperty;
	Format?:AWSStringProperty;

}
