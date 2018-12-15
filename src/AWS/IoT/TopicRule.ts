import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TopicRule extends AWSResource<TopicRule_ResourceProperties> {
	constructor(name:string,properties:TopicRule_ResourceProperties){
		super(name,properties,"AWS::IoT::TopicRule");
	}
}

export interface TopicRule_ResourceProperties extends AWSResourceProperties {
	RuleName?:AWSStringProperty;
	TopicRulePayload:TopicRule_TopicRulePayload;

}
export interface TopicRule_S3Action {
	BucketName:AWSStringProperty;
	Key:AWSStringProperty;
	RoleArn:AWSStringProperty;

}
export interface TopicRule_SqsAction {
	QueueUrl:AWSStringProperty;
	RoleArn:AWSStringProperty;
	UseBase64?:boolean;

}
export interface TopicRule_PutItemInput {
	TableName:AWSStringProperty;

}
export interface TopicRule_RepublishAction {
	RoleArn:AWSStringProperty;
	Topic:AWSStringProperty;

}
export interface TopicRule_SnsAction {
	MessageFormat?:AWSStringProperty;
	RoleArn:AWSStringProperty;
	TargetArn:AWSStringProperty;

}
export interface TopicRule_StepFunctionsAction {
	ExecutionNamePrefix?:AWSStringProperty;
	RoleArn:AWSStringProperty;
	StateMachineName:AWSStringProperty;

}
export interface TopicRule_FirehoseAction {
	DeliveryStreamName:AWSStringProperty;
	RoleArn:AWSStringProperty;
	Separator?:AWSStringProperty;

}
export interface TopicRule_TopicRulePayload {
	Actions:TopicRule_Action[];
	AwsIotSqlVersion?:AWSStringProperty;
	Description?:AWSStringProperty;
	ErrorAction?:TopicRule_Action;
	RuleDisabled:boolean;
	Sql:AWSStringProperty;

}
export interface TopicRule_LambdaAction {
	FunctionArn?:AWSStringProperty;

}
export interface TopicRule_DynamoDBv2Action {
	PutItem?:TopicRule_PutItemInput;
	RoleArn?:AWSStringProperty;

}
export interface TopicRule_ElasticsearchAction {
	Endpoint:AWSStringProperty;
	Id:AWSStringProperty;
	Index:AWSStringProperty;
	RoleArn:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface TopicRule_DynamoDBAction {
	HashKeyField:AWSStringProperty;
	HashKeyType?:AWSStringProperty;
	HashKeyValue:AWSStringProperty;
	PayloadField?:AWSStringProperty;
	RangeKeyField?:AWSStringProperty;
	RangeKeyType?:AWSStringProperty;
	RangeKeyValue?:AWSStringProperty;
	RoleArn:AWSStringProperty;
	TableName:AWSStringProperty;

}
export interface TopicRule_KinesisAction {
	PartitionKey?:AWSStringProperty;
	RoleArn:AWSStringProperty;
	StreamName:AWSStringProperty;

}
export interface TopicRule_CloudwatchAlarmAction {
	AlarmName:AWSStringProperty;
	RoleArn:AWSStringProperty;
	StateReason:AWSStringProperty;
	StateValue:AWSStringProperty;

}
export interface TopicRule_Action {
	CloudwatchAlarm?:TopicRule_CloudwatchAlarmAction;
	CloudwatchMetric?:TopicRule_CloudwatchMetricAction;
	DynamoDB?:TopicRule_DynamoDBAction;
	DynamoDBv2?:TopicRule_DynamoDBv2Action;
	Elasticsearch?:TopicRule_ElasticsearchAction;
	Firehose?:TopicRule_FirehoseAction;
	IotAnalytics?:TopicRule_IotAnalyticsAction;
	Kinesis?:TopicRule_KinesisAction;
	Lambda?:TopicRule_LambdaAction;
	Republish?:TopicRule_RepublishAction;
	S3?:TopicRule_S3Action;
	Sns?:TopicRule_SnsAction;
	Sqs?:TopicRule_SqsAction;
	StepFunctions?:TopicRule_StepFunctionsAction;

}
export interface TopicRule_IotAnalyticsAction {
	ChannelName:AWSStringProperty;
	RoleArn:AWSStringProperty;

}
export interface TopicRule_CloudwatchMetricAction {
	MetricName:AWSStringProperty;
	MetricNamespace:AWSStringProperty;
	MetricTimestamp?:AWSStringProperty;
	MetricUnit:AWSStringProperty;
	MetricValue:AWSStringProperty;
	RoleArn:AWSStringProperty;

}
