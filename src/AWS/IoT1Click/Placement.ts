import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Placement extends AWSResource<Placement_ResourceProperties> {
	constructor(name:string,properties:Placement_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT1Click::Placement",dependsOn);
	}
}

export interface Placement_ResourceProperties extends AWSResourceProperties {
	PlacementName?:AWSStringProperty;
	ProjectName:AWSStringProperty;
	AssociatedDevices?:any;
	Attributes?:any;

}
