import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class VPCEndpointConnectionNotification extends AWSResource<VPCEndpointConnectionNotification_ResourceProperties> {
	constructor(name:string,properties:VPCEndpointConnectionNotification_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::VPCEndpointConnectionNotification",dependsOn);
	}
}

export interface VPCEndpointConnectionNotification_ResourceProperties extends AWSResourceProperties {
	ConnectionEvents:AWSStringListProperty;
	VPCEndpointId?:AWSStringProperty;
	ServiceId?:AWSStringProperty;
	ConnectionNotificationArn:AWSStringProperty;

}
