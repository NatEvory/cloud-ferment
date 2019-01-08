import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Trail extends AWSResource<Trail_ResourceProperties> {
	constructor(name:string,properties:Trail_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudTrail::Trail",dependsOn);
	}
}

export interface Trail_ResourceProperties extends AWSResourceProperties {
	CloudWatchLogsLogGroupArn?:AWSStringProperty;
	CloudWatchLogsRoleArn?:AWSStringProperty;
	EnableLogFileValidation?:boolean;
	EventSelectors?:Trail_EventSelector[];
	IncludeGlobalServiceEvents?:boolean;
	IsLogging:boolean;
	IsMultiRegionTrail?:boolean;
	KMSKeyId?:AWSStringProperty;
	S3BucketName:AWSStringProperty;
	S3KeyPrefix?:AWSStringProperty;
	SnsTopicName?:AWSStringProperty;
	Tags?:Tag[];
	TrailName?:AWSStringProperty;

}
export interface Trail_EventSelector {
	DataResources?:Trail_DataResource[];
	IncludeManagementEvents?:boolean;
	ReadWriteType?:AWSStringProperty;

}
export interface Trail_DataResource {
	Type:AWSStringProperty;
	Values?:AWSStringListProperty;

}
