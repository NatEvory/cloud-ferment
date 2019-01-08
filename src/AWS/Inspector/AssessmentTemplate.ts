import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AssessmentTemplate extends AWSResource<AssessmentTemplate_ResourceProperties> {
	constructor(name:string,properties:AssessmentTemplate_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Inspector::AssessmentTemplate",dependsOn);
	}
}

export interface AssessmentTemplate_ResourceProperties extends AWSResourceProperties {
	AssessmentTargetArn:AWSStringProperty;
	DurationInSeconds:number;
	AssessmentTemplateName?:AWSStringProperty;
	RulesPackageArns:AWSStringListProperty;
	UserAttributesForFindings?:Tag[];

}
