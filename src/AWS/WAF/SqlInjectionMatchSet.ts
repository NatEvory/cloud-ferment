import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SqlInjectionMatchSet extends AWSResource<SqlInjectionMatchSet_ResourceProperties> {
	constructor(name:string,properties:SqlInjectionMatchSet_ResourceProperties){
		super(name,properties,"AWS::WAF::SqlInjectionMatchSet");
	}
}

export interface SqlInjectionMatchSet_ResourceProperties extends AWSResourceProperties {
	Name:AWSStringProperty;
	SqlInjectionMatchTuples?:SqlInjectionMatchSet_SqlInjectionMatchTuple[];

}
export interface SqlInjectionMatchSet_SqlInjectionMatchTuple {
	FieldToMatch:SqlInjectionMatchSet_FieldToMatch;
	TextTransformation:AWSStringProperty;

}
export interface SqlInjectionMatchSet_FieldToMatch {
	Data?:AWSStringProperty;
	Type:AWSStringProperty;

}
