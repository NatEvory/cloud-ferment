import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Instance extends AWSResource<Instance_ResourceProperties> {
	constructor(name:string,properties:Instance_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceDiscovery::Instance",dependsOn);
	}
}

export interface Instance_ResourceProperties extends AWSResourceProperties {
	InstanceAttributes:number;
	InstanceId?:AWSStringProperty;
	ServiceId:AWSStringProperty;

}
