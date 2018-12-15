import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Cluster extends AWSResource<Cluster_ResourceProperties> {
	constructor(name:string,properties:Cluster_ResourceProperties){
		super(name,properties,"AWS::DAX::Cluster");
	}
}

export interface Cluster_ResourceProperties extends AWSResourceProperties {
	SSESpecification?:Cluster_SSESpecification;
	Description?:AWSStringProperty;
	ReplicationFactor:number;
	ParameterGroupName?:AWSStringProperty;
	AvailabilityZones?:AWSStringListProperty;
	IAMRoleARN:AWSStringProperty;
	SubnetGroupName?:AWSStringProperty;
	PreferredMaintenanceWindow?:AWSStringProperty;
	NotificationTopicARN?:AWSStringProperty;
	SecurityGroupIds?:AWSStringListProperty;
	NodeType:AWSStringProperty;
	ClusterName?:AWSStringProperty;
	Tags?:any;

}
export interface Cluster_SSESpecification {
	SSEEnabled?:boolean;

}
