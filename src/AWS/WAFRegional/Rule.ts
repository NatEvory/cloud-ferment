import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Rule extends AWSResource<Rule_ResourceProperties> {
	constructor(name:string,properties:Rule_ResourceProperties){
		super(name,properties,"AWS::WAFRegional::Rule");
	}
}

export interface Rule_ResourceProperties extends AWSResourceProperties {
	MetricName:AWSStringProperty;
	Predicates?:Rule_Predicate[];
	Name:AWSStringProperty;

}
export interface Rule_Predicate {
	Type:AWSStringProperty;
	DataId:AWSStringProperty;
	Negated:boolean;

}
