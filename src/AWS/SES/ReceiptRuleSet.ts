import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ReceiptRuleSet extends AWSResource<ReceiptRuleSet_ResourceProperties> {
	constructor(name:string,properties:ReceiptRuleSet_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SES::ReceiptRuleSet",dependsOn);
	}
}

export interface ReceiptRuleSet_ResourceProperties extends AWSResourceProperties {
	RuleSetName?:AWSStringProperty;

}
