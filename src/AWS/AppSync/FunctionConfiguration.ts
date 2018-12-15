import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class FunctionConfiguration extends AWSResource<FunctionConfiguration_ResourceProperties> {
	constructor(name:string,properties:FunctionConfiguration_ResourceProperties){
		super(name,properties,"AWS::AppSync::FunctionConfiguration");
	}
}

export interface FunctionConfiguration_ResourceProperties extends AWSResourceProperties {
	ResponseMappingTemplateS3Location?:AWSStringProperty;
	Description?:AWSStringProperty;
	DataSourceName?:AWSStringProperty;
	RequestMappingTemplate?:AWSStringProperty;
	ResponseMappingTemplate?:AWSStringProperty;
	FunctionVersion?:AWSStringProperty;
	RequestMappingTemplateS3Location?:AWSStringProperty;
	ApiId:AWSStringProperty;
	Name?:AWSStringProperty;

}
