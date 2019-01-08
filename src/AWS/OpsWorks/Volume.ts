import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Volume extends AWSResource<Volume_ResourceProperties> {
	constructor(name:string,properties:Volume_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::OpsWorks::Volume",dependsOn);
	}
}

export interface Volume_ResourceProperties extends AWSResourceProperties {
	Ec2VolumeId:AWSStringProperty;
	MountPoint?:AWSStringProperty;
	Name?:AWSStringProperty;
	StackId:AWSStringProperty;

}
