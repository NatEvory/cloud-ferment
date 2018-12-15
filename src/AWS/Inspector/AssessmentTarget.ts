import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AssessmentTarget extends AWSResource<AssessmentTarget_ResourceProperties> {
	constructor(name:string,properties:AssessmentTarget_ResourceProperties){
		super(name,properties,"AWS::Inspector::AssessmentTarget");
	}
}

export interface AssessmentTarget_ResourceProperties extends AWSResourceProperties {
	AssessmentTargetName?:AWSStringProperty;
	ResourceGroupArn:AWSStringProperty;

}
