import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class WebACL extends AWSResource<WebACL_ResourceProperties> {
	constructor(name:string,properties:WebACL_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::WAFRegional::WebACL",dependsOn);
	}
}

export interface WebACL_ResourceProperties extends AWSResourceProperties {
	MetricName:AWSStringProperty;
	DefaultAction:WebACL_Action;
	Rules?:WebACL_Rule[];
	Name:AWSStringProperty;

}
export interface WebACL_Rule {
	Action:WebACL_Action;
	Priority:number;
	RuleId:AWSStringProperty;

}
export interface WebACL_Action {
	Type:AWSStringProperty;

}
