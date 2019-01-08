import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LogStream extends AWSResource<LogStream_ResourceProperties> {
	constructor(name:string,properties:LogStream_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Logs::LogStream",dependsOn);
	}
}

export interface LogStream_ResourceProperties extends AWSResourceProperties {
	LogGroupName:AWSStringProperty;
	LogStreamName?:AWSStringProperty;

}
