import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class StackFleetAssociation extends AWSResource<StackFleetAssociation_ResourceProperties> {
	constructor(name:string,properties:StackFleetAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::AppStream::StackFleetAssociation",dependsOn);
	}
}

export interface StackFleetAssociation_ResourceProperties extends AWSResourceProperties {
	FleetName:AWSStringProperty;
	StackName:AWSStringProperty;

}
