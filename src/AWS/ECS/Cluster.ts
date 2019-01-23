import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Cluster extends AWSResource<Cluster_ResourceProperties> {
	constructor(name:string,properties:Cluster_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ECS::Cluster",dependsOn);
	}
}

export interface Cluster_ResourceProperties extends AWSResourceProperties {
	ClusterName?:AWSStringProperty;
	Tags?:Tag[];

}
