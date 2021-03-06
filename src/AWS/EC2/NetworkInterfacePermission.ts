import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NetworkInterfacePermission extends AWSResource<NetworkInterfacePermission_ResourceProperties> {
	constructor(name:string,properties:NetworkInterfacePermission_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::NetworkInterfacePermission",dependsOn);
	}
}

export interface NetworkInterfacePermission_ResourceProperties extends AWSResourceProperties {
	AwsAccountId:AWSStringProperty;
	NetworkInterfaceId:AWSStringProperty;
	Permission:AWSStringProperty;

}
