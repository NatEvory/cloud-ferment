import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ReceiptRule extends AWSResource<ReceiptRule_ResourceProperties> {
    constructor(name: string, properties: ReceiptRule_ResourceProperties);
}
export interface ReceiptRule_ResourceProperties extends AWSResourceProperties {
    After?: AWSStringProperty;
    Rule: ReceiptRule_Rule;
    RuleSetName: AWSStringProperty;
}
export interface ReceiptRule_BounceAction {
    Sender: AWSStringProperty;
    SmtpReplyCode: AWSStringProperty;
    Message: AWSStringProperty;
    TopicArn?: AWSStringProperty;
    StatusCode?: AWSStringProperty;
}
export interface ReceiptRule_WorkmailAction {
    TopicArn?: AWSStringProperty;
    OrganizationArn: AWSStringProperty;
}
export interface ReceiptRule_StopAction {
    Scope: AWSStringProperty;
    TopicArn?: AWSStringProperty;
}
export interface ReceiptRule_Action {
    BounceAction?: ReceiptRule_BounceAction;
    S3Action?: ReceiptRule_S3Action;
    StopAction?: ReceiptRule_StopAction;
    SNSAction?: ReceiptRule_SNSAction;
    WorkmailAction?: ReceiptRule_WorkmailAction;
    AddHeaderAction?: ReceiptRule_AddHeaderAction;
    LambdaAction?: ReceiptRule_LambdaAction;
}
export interface ReceiptRule_SNSAction {
    TopicArn?: AWSStringProperty;
    Encoding?: AWSStringProperty;
}
export interface ReceiptRule_Rule {
    ScanEnabled?: boolean;
    Recipients?: AWSStringListProperty;
    Actions?: ReceiptRule_Action[];
    Enabled?: boolean;
    Name?: AWSStringProperty;
    TlsPolicy?: AWSStringProperty;
}
export interface ReceiptRule_LambdaAction {
    FunctionArn: AWSStringProperty;
    TopicArn?: AWSStringProperty;
    InvocationType?: AWSStringProperty;
}
export interface ReceiptRule_S3Action {
    BucketName: AWSStringProperty;
    KmsKeyArn?: AWSStringProperty;
    TopicArn?: AWSStringProperty;
    ObjectKeyPrefix?: AWSStringProperty;
}
export interface ReceiptRule_AddHeaderAction {
    HeaderValue: AWSStringProperty;
    HeaderName: AWSStringProperty;
}
