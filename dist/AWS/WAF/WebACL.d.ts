import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class WebACL extends AWSResource<WebACL_ResourceProperties> {
    constructor(name: string, properties: WebACL_ResourceProperties, dependsOn?: string[]);
}
export interface WebACL_ResourceProperties extends AWSResourceProperties {
    DefaultAction: WebACL_WafAction;
    MetricName: AWSStringProperty;
    Name: AWSStringProperty;
    Rules?: WebACL_ActivatedRule[];
}
export interface WebACL_WafAction {
    Type: AWSStringProperty;
}
export interface WebACL_ActivatedRule {
    Action?: WebACL_WafAction;
    Priority: number;
    RuleId: AWSStringProperty;
}
