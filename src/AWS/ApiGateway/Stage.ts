import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Stage extends AWSResource<Stage_ResourceProperties> {
	constructor(name:string,properties:Stage_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::Stage");
	}
}

export interface Stage_ResourceProperties extends AWSResourceProperties {
	AccessLogSetting?:Stage_AccessLogSetting;
	CacheClusterEnabled?:boolean;
	CacheClusterSize?:AWSStringProperty;
	CanarySetting?:Stage_CanarySetting;
	ClientCertificateId?:AWSStringProperty;
	DeploymentId?:AWSStringProperty;
	Description?:AWSStringProperty;
	DocumentationVersion?:AWSStringProperty;
	MethodSettings?:Stage_MethodSetting[];
	RestApiId:AWSStringProperty;
	StageName?:AWSStringProperty;
	Tags?:Tag[];
	TracingEnabled?:boolean;
	Variables?:Map<string,AWSStringProperty>;

}
export interface Stage_MethodSetting {
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
export interface Stage_CanarySetting {
	DeploymentId?:AWSStringProperty;
	PercentTraffic?:number;
	StageVariableOverrides?:Map<string,AWSStringProperty>;
	UseStageCache?:boolean;

}
export interface Stage_AccessLogSetting {
	DestinationArn?:AWSStringProperty;
	Format?:AWSStringProperty;

}