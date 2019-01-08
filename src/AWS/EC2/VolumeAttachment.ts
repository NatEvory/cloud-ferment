import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VolumeAttachment extends AWSResource<VolumeAttachment_ResourceProperties> {
	constructor(name:string,properties:VolumeAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VolumeAttachment",dependsOn);
	}
}

export interface VolumeAttachment_ResourceProperties extends AWSResourceProperties {
	Device:AWSStringProperty;
	InstanceId:AWSStringProperty;
	VolumeId:AWSStringProperty;

}
