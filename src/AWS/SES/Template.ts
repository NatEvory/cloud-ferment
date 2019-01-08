import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Template extends AWSResource<Template_ResourceProperties> {
	constructor(name:string,properties:Template_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SES::Template",dependsOn);
	}
}

export interface Template_ResourceProperties extends AWSResourceProperties {
	Template?:Template_Template;

}
export interface Template_Template {
	HtmlPart?:AWSStringProperty;
	TextPart?:AWSStringProperty;
	TemplateName?:AWSStringProperty;
	SubjectPart?:AWSStringProperty;

}
