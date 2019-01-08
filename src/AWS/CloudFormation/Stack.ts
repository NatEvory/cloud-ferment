import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Stack extends AWSResource<Stack_ResourceProperties> {
	constructor(name:string,properties:Stack_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudFormation::Stack",dependsOn);
	}
}

export interface Stack_ResourceProperties extends AWSResourceProperties {
	NotificationARNs?:AWSStringListProperty;
	Parameters?:{[key:string]:AWSStringProperty};
	Tags?:Tag[];
	TemplateURL:AWSStringProperty;
	TimeoutInMinutes?:number;

}
