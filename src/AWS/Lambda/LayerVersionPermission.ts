import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LayerVersionPermission extends AWSResource<LayerVersionPermission_ResourceProperties> {
	constructor(name:string,properties:LayerVersionPermission_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Lambda::LayerVersionPermission",dependsOn);
	}
}

export interface LayerVersionPermission_ResourceProperties extends AWSResourceProperties {
	Action:AWSStringProperty;
	LayerVersionArn:AWSStringProperty;
	OrganizationId?:AWSStringProperty;
	Principal:AWSStringProperty;

}
