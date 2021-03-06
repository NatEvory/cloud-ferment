import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ApiKey extends AWSResource<ApiKey_ResourceProperties> {
	constructor(name:string,properties:ApiKey_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AppSync::ApiKey",dependsOn);
	}
}

export interface ApiKey_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	Expires?:number;
	ApiId:AWSStringProperty;

}
