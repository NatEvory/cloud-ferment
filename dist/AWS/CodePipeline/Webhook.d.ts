import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Webhook extends AWSResource<Webhook_ResourceProperties> {
    constructor(name: string, properties: Webhook_ResourceProperties);
}
export interface Webhook_ResourceProperties extends AWSResourceProperties {
    AuthenticationConfiguration: Webhook_WebhookAuthConfiguration;
    Filters: Webhook_WebhookFilterRule[];
    Authentication: AWSStringProperty;
    TargetPipeline: AWSStringProperty;
    TargetAction: AWSStringProperty;
    Name?: AWSStringProperty;
    TargetPipelineVersion: number;
    RegisterWithThirdParty?: boolean;
}
export interface Webhook_WebhookFilterRule {
    JsonPath: AWSStringProperty;
    MatchEquals?: AWSStringProperty;
}
export interface Webhook_WebhookAuthConfiguration {
    AllowedIPRange?: AWSStringProperty;
    SecretToken?: AWSStringProperty;
}
