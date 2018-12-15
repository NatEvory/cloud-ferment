import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Webhook extends AWSResource<Webhook_ResourceProperties> {
	constructor(name:string,properties:Webhook_ResourceProperties){
		super(name,properties,"AWS::CodePipeline::Webhook");
	}
}

export interface Webhook_ResourceProperties extends AWSResourceProperties {
	AuthenticationConfiguration:Webhook_WebhookAuthConfiguration;
	Filters:Webhook_WebhookFilterRule[];
	Authentication:AWSStringProperty;
	TargetPipeline:AWSStringProperty;
	TargetAction:AWSStringProperty;
	Name?:AWSStringProperty;
	TargetPipelineVersion:number;
	RegisterWithThirdParty?:boolean;

}
export interface Webhook_WebhookFilterRule {
	JsonPath:AWSStringProperty;
	MatchEquals?:AWSStringProperty;

}
export interface Webhook_WebhookAuthConfiguration {
	AllowedIPRange?:AWSStringProperty;
	SecretToken?:AWSStringProperty;

}
