import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NetworkInterfaceAttachment extends AWSResource<NetworkInterfaceAttachment_ResourceProperties> {
	constructor(name:string,properties:NetworkInterfaceAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::NetworkInterfaceAttachment",dependsOn);
	}
}

export interface NetworkInterfaceAttachment_ResourceProperties extends AWSResourceProperties {
	DeleteOnTermination?:boolean;
	DeviceIndex:AWSStringProperty;
	InstanceId:AWSStringProperty;
	NetworkInterfaceId:AWSStringProperty;

}
