import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Configuration extends AWSResource<Configuration_ResourceProperties> {
	constructor(name:string,properties:Configuration_ResourceProperties){
		super(name,properties,"AWS::AmazonMQ::Configuration");
	}
}

export interface Configuration_ResourceProperties extends AWSResourceProperties {
	EngineVersion:AWSStringProperty;
	Description?:AWSStringProperty;
	EngineType:AWSStringProperty;
	Data:AWSStringProperty;
	Name:AWSStringProperty;

}
