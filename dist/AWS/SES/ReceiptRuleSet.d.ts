import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ReceiptRuleSet extends AWSResource<ReceiptRuleSet_ResourceProperties> {
    constructor(name: string, properties: ReceiptRuleSet_ResourceProperties, dependsOn?: string[]);
}
export interface ReceiptRuleSet_ResourceProperties extends AWSResourceProperties {
    RuleSetName?: AWSStringProperty;
}
