import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ClusterParameterGroup extends AWSResource<ClusterParameterGroup_ResourceProperties> {
	constructor(name:string,properties:ClusterParameterGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Redshift::ClusterParameterGroup",dependsOn);
	}
}

export interface ClusterParameterGroup_ResourceProperties extends AWSResourceProperties {
	Description:AWSStringProperty;
	ParameterGroupFamily:AWSStringProperty;
	Parameters?:ClusterParameterGroup_Parameter[];
	Tags?:Tag[];

}
export interface ClusterParameterGroup_Parameter {
	ParameterName:AWSStringProperty;
	ParameterValue:AWSStringProperty;

}
