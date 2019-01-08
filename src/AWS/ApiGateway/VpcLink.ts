import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VpcLink extends AWSResource<VpcLink_ResourceProperties> {
	constructor(name:string,properties:VpcLink_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ApiGateway::VpcLink",dependsOn);
	}
}

export interface VpcLink_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	TargetArns:AWSStringListProperty;
	Name:AWSStringProperty;

}
