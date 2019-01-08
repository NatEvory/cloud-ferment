import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ReplicationGroup extends AWSResource<ReplicationGroup_ResourceProperties> {
	constructor(name:string,properties:ReplicationGroup_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ElastiCache::ReplicationGroup",dependsOn);
	}
}

export interface ReplicationGroup_ResourceProperties extends AWSResourceProperties {
	AtRestEncryptionEnabled?:boolean;
	AuthToken?:AWSStringProperty;
	AutoMinorVersionUpgrade?:boolean;
	AutomaticFailoverEnabled?:boolean;
	CacheNodeType?:AWSStringProperty;
	CacheParameterGroupName?:AWSStringProperty;
	CacheSecurityGroupNames?:AWSStringListProperty;
	CacheSubnetGroupName?:AWSStringProperty;
	Engine?:AWSStringProperty;
	EngineVersion?:AWSStringProperty;
	NodeGroupConfiguration?:ReplicationGroup_NodeGroupConfiguration[];
	NotificationTopicArn?:AWSStringProperty;
	NumCacheClusters?:number;
	NumNodeGroups?:number;
	Port?:number;
	PreferredCacheClusterAZs?:AWSStringListProperty;
	PreferredMaintenanceWindow?:AWSStringProperty;
	PrimaryClusterId?:AWSStringProperty;
	ReplicasPerNodeGroup?:number;
	ReplicationGroupDescription:AWSStringProperty;
	ReplicationGroupId?:AWSStringProperty;
	SecurityGroupIds?:AWSStringListProperty;
	SnapshotArns?:AWSStringListProperty;
	SnapshotName?:AWSStringProperty;
	SnapshotRetentionLimit?:number;
	SnapshotWindow?:AWSStringProperty;
	SnapshottingClusterId?:AWSStringProperty;
	Tags?:Tag[];
	TransitEncryptionEnabled?:boolean;

}
export interface ReplicationGroup_NodeGroupConfiguration {
	NodeGroupId?:AWSStringProperty;
	PrimaryAvailabilityZone?:AWSStringProperty;
	ReplicaAvailabilityZones?:AWSStringListProperty;
	ReplicaCount?:number;
	Slots?:AWSStringProperty;

}
