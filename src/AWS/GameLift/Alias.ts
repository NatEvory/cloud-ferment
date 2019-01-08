import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Alias extends AWSResource<Alias_ResourceProperties> {
	constructor(name:string,properties:Alias_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::GameLift::Alias",dependsOn);
	}
}

export interface Alias_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	Name:AWSStringProperty;
	RoutingStrategy:Alias_RoutingStrategy;

}
export interface Alias_RoutingStrategy {
	FleetId?:AWSStringProperty;
	Message?:AWSStringProperty;
	Type:AWSStringProperty;

}
