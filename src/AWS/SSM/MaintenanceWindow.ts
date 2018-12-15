import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class MaintenanceWindow extends AWSResource<MaintenanceWindow_ResourceProperties> {
	constructor(name:string,properties:MaintenanceWindow_ResourceProperties){
		super(name,properties,"AWS::SSM::MaintenanceWindow");
	}
}

export interface MaintenanceWindow_ResourceProperties extends AWSResourceProperties {
	StartDate?:AWSStringProperty;
	Description?:AWSStringProperty;
	AllowUnassociatedTargets:boolean;
	Cutoff:number;
	Schedule:AWSStringProperty;
	Duration:number;
	EndDate?:AWSStringProperty;
	Name:AWSStringProperty;
	ScheduleTimezone?:AWSStringProperty;

}
