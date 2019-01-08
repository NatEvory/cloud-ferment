import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Alias extends AWSResource<Alias_ResourceProperties> {
	constructor(name:string,properties:Alias_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Lambda::Alias",dependsOn);
	}
}

export interface Alias_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	FunctionName:AWSStringProperty;
	FunctionVersion:AWSStringProperty;
	Name:AWSStringProperty;
	RoutingConfig?:Alias_AliasRoutingConfiguration;

}
export interface Alias_AliasRoutingConfiguration {
	AdditionalVersionWeights:Alias_VersionWeight[];

}
export interface Alias_VersionWeight {
	FunctionVersion:AWSStringProperty;
	FunctionWeight:number;

}
