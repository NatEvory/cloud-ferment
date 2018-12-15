import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class WebACL extends AWSResource<WebACL_ResourceProperties> {
	constructor(name:string,properties:WebACL_ResourceProperties){
		super(name,properties,"AWS::WAF::WebACL");
	}
}

export interface WebACL_ResourceProperties extends AWSResourceProperties {
	DefaultAction:WebACL_WafAction;
	MetricName:AWSStringProperty;
	Name:AWSStringProperty;
	Rules?:WebACL_ActivatedRule[];

}
export interface WebACL_WafAction {
	Type:AWSStringProperty;

}
export interface WebACL_ActivatedRule {
	Action?:WebACL_WafAction;
	Priority:number;
	RuleId:AWSStringProperty;

}
