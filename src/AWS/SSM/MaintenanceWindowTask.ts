import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class MaintenanceWindowTask extends AWSResource<MaintenanceWindowTask_ResourceProperties> {
	constructor(name:string,properties:MaintenanceWindowTask_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SSM::MaintenanceWindowTask",dependsOn);
	}
}

export interface MaintenanceWindowTask_ResourceProperties extends AWSResourceProperties {
	MaxErrors:AWSStringProperty;
	Description?:AWSStringProperty;
	ServiceRoleArn:AWSStringProperty;
	Priority:number;
	MaxConcurrency:AWSStringProperty;
	Targets:MaintenanceWindowTask_Target[];
	Name?:AWSStringProperty;
	TaskArn:AWSStringProperty;
	TaskInvocationParameters?:MaintenanceWindowTask_TaskInvocationParameters;
	WindowId?:AWSStringProperty;
	TaskParameters?:any;
	TaskType:AWSStringProperty;
	LoggingInfo?:MaintenanceWindowTask_LoggingInfo;

}
export interface MaintenanceWindowTask_MaintenanceWindowLambdaParameters {
	ClientContext?:AWSStringProperty;
	Qualifier?:AWSStringProperty;
	Payload?:AWSStringProperty;

}
export interface MaintenanceWindowTask_NotificationConfig {
	NotificationArn:AWSStringProperty;
	NotificationType?:AWSStringProperty;
	NotificationEvents?:AWSStringListProperty;

}
export interface MaintenanceWindowTask_MaintenanceWindowAutomationParameters {
	Parameters?:any;
	DocumentVersion?:AWSStringProperty;

}
export interface MaintenanceWindowTask_TaskInvocationParameters {
	MaintenanceWindowRunCommandParameters?:MaintenanceWindowTask_MaintenanceWindowRunCommandParameters;
	MaintenanceWindowAutomationParameters?:MaintenanceWindowTask_MaintenanceWindowAutomationParameters;
	MaintenanceWindowStepFunctionsParameters?:MaintenanceWindowTask_MaintenanceWindowStepFunctionsParameters;
	MaintenanceWindowLambdaParameters?:MaintenanceWindowTask_MaintenanceWindowLambdaParameters;

}
export interface MaintenanceWindowTask_LoggingInfo {
	S3Bucket:AWSStringProperty;
	Region:AWSStringProperty;
	S3Prefix?:AWSStringProperty;

}
export interface MaintenanceWindowTask_Target {
	Values?:AWSStringListProperty;
	Key:AWSStringProperty;

}
export interface MaintenanceWindowTask_MaintenanceWindowStepFunctionsParameters {
	Input?:AWSStringProperty;
	Name?:AWSStringProperty;

}
export interface MaintenanceWindowTask_MaintenanceWindowRunCommandParameters {
	TimeoutSeconds?:number;
	Comment?:AWSStringProperty;
	OutputS3KeyPrefix?:AWSStringProperty;
	Parameters?:any;
	DocumentHashType?:AWSStringProperty;
	ServiceRoleArn?:AWSStringProperty;
	NotificationConfig?:MaintenanceWindowTask_NotificationConfig;
	OutputS3BucketName?:AWSStringProperty;
	DocumentHash?:AWSStringProperty;

}
