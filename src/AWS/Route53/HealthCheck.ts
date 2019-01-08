import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class HealthCheck extends AWSResource<HealthCheck_ResourceProperties> {
	constructor(name:string,properties:HealthCheck_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Route53::HealthCheck",dependsOn);
	}
}

export interface HealthCheck_ResourceProperties extends AWSResourceProperties {
	HealthCheckConfig:HealthCheck_HealthCheckConfig;
	HealthCheckTags?:HealthCheck_HealthCheckTag[];

}
export interface HealthCheck_HealthCheckConfig {
	AlarmIdentifier?:HealthCheck_AlarmIdentifier;
	ChildHealthChecks?:AWSStringListProperty;
	EnableSNI?:boolean;
	FailureThreshold?:number;
	FullyQualifiedDomainName?:AWSStringProperty;
	HealthThreshold?:number;
	IPAddress?:AWSStringProperty;
	InsufficientDataHealthStatus?:AWSStringProperty;
	Inverted?:boolean;
	MeasureLatency?:boolean;
	Port?:number;
	Regions?:AWSStringListProperty;
	RequestInterval?:number;
	ResourcePath?:AWSStringProperty;
	SearchString?:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface HealthCheck_HealthCheckTag {
	Key:AWSStringProperty;
	Value:AWSStringProperty;

}
export interface HealthCheck_AlarmIdentifier {
	Name:AWSStringProperty;
	Region:AWSStringProperty;

}
