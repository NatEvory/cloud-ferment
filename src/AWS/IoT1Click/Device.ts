import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Device extends AWSResource<Device_ResourceProperties> {
	constructor(name:string,properties:Device_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT1Click::Device",dependsOn);
	}
}

export interface Device_ResourceProperties extends AWSResourceProperties {
	DeviceId:AWSStringProperty;
	Enabled:boolean;

}
