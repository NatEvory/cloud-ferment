import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class MaintenanceWindowTarget extends AWSResource<MaintenanceWindowTarget_ResourceProperties> {
	constructor(name:string,properties:MaintenanceWindowTarget_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SSM::MaintenanceWindowTarget",dependsOn);
	}
}

export interface MaintenanceWindowTarget_ResourceProperties extends AWSResourceProperties {
	OwnerInformation?:AWSStringProperty;
	Description?:AWSStringProperty;
	WindowId:AWSStringProperty;
	ResourceType:AWSStringProperty;
	Targets:MaintenanceWindowTarget_Targets[];
	Name?:AWSStringProperty;

}
export interface MaintenanceWindowTarget_Targets {
	Values?:AWSStringListProperty;
	Key:AWSStringProperty;

}
