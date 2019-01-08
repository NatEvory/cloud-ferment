import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Destination extends AWSResource<Destination_ResourceProperties> {
	constructor(name:string,properties:Destination_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Logs::Destination",dependsOn);
	}
}

export interface Destination_ResourceProperties extends AWSResourceProperties {
	DestinationName:AWSStringProperty;
	DestinationPolicy:AWSStringProperty;
	RoleArn:AWSStringProperty;
	TargetArn:AWSStringProperty;

}
