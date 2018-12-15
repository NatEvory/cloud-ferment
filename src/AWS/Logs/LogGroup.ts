import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LogGroup extends AWSResource<LogGroup_ResourceProperties> {
	constructor(name:string,properties:LogGroup_ResourceProperties){
		super(name,properties,"AWS::Logs::LogGroup");
	}
}

export interface LogGroup_ResourceProperties extends AWSResourceProperties {
	LogGroupName?:AWSStringProperty;
	RetentionInDays?:number;

}
