import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SqlInjectionMatchSet extends AWSResource<SqlInjectionMatchSet_ResourceProperties> {
	constructor(name:string,properties:SqlInjectionMatchSet_ResourceProperties){
		super(name,properties,"AWS::WAFRegional::SqlInjectionMatchSet");
	}
}

export interface SqlInjectionMatchSet_ResourceProperties extends AWSResourceProperties {
	SqlInjectionMatchTuples?:SqlInjectionMatchSet_SqlInjectionMatchTuple[];
	Name:AWSStringProperty;

}
export interface SqlInjectionMatchSet_FieldToMatch {
	Type:AWSStringProperty;
	Data?:AWSStringProperty;

}
export interface SqlInjectionMatchSet_SqlInjectionMatchTuple {
	TextTransformation:AWSStringProperty;
	FieldToMatch:SqlInjectionMatchSet_FieldToMatch;

}
