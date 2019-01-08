import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Host extends AWSResource<Host_ResourceProperties> {
	constructor(name:string,properties:Host_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::Host",dependsOn);
	}
}

export interface Host_ResourceProperties extends AWSResourceProperties {
	AutoPlacement?:AWSStringProperty;
	AvailabilityZone:AWSStringProperty;
	InstanceType:AWSStringProperty;

}
