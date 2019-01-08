import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Project extends AWSResource<Project_ResourceProperties> {
	constructor(name:string,properties:Project_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT1Click::Project",dependsOn);
	}
}

export interface Project_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	PlacementTemplate:Project_PlacementTemplate;
	ProjectName?:AWSStringProperty;

}
export interface Project_DeviceTemplate {
	DeviceType?:AWSStringProperty;
	CallbackOverrides?:any;

}
export interface Project_PlacementTemplate {
	DeviceTemplates?:any;
	DefaultAttributes?:any;

}
