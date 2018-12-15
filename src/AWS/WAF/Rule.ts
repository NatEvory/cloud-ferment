import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Rule extends AWSResource<Rule_ResourceProperties> {
	constructor(name:string,properties:Rule_ResourceProperties){
		super(name,properties,"AWS::WAF::Rule");
	}
}

export interface Rule_ResourceProperties extends AWSResourceProperties {
	MetricName:AWSStringProperty;
	Name:AWSStringProperty;
	Predicates?:Rule_Predicate[];

}
export interface Rule_Predicate {
	DataId:AWSStringProperty;
	Negated:boolean;
	Type:AWSStringProperty;

}
