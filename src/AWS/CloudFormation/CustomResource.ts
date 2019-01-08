import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CustomResource extends AWSResource<CustomResource_ResourceProperties> {
	constructor(name:string,properties:CustomResource_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudFormation::CustomResource",dependsOn);
	}
}

export interface CustomResource_ResourceProperties extends AWSResourceProperties {
	ServiceToken:AWSStringProperty;

}
