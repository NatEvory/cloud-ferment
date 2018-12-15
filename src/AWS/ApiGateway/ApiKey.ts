import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ApiKey extends AWSResource<ApiKey_ResourceProperties> {
	constructor(name:string,properties:ApiKey_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::ApiKey");
	}
}

export interface ApiKey_ResourceProperties extends AWSResourceProperties {
	CustomerId?:AWSStringProperty;
	Description?:AWSStringProperty;
	Enabled?:boolean;
	GenerateDistinctId?:boolean;
	Name?:AWSStringProperty;
	StageKeys?:ApiKey_StageKey[];

}
export interface ApiKey_StageKey {
	RestApiId?:AWSStringProperty;
	StageName?:AWSStringProperty;

}
