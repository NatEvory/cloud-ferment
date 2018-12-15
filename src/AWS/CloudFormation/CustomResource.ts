import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CustomResource extends AWSResource<CustomResource_ResourceProperties> {
	constructor(name:string,properties:CustomResource_ResourceProperties){
		super(name,properties,"AWS::CloudFormation::CustomResource");
	}
}

export interface CustomResource_ResourceProperties extends AWSResourceProperties {
	ServiceToken:AWSStringProperty;

}
