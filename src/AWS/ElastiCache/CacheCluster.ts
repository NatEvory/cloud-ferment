import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class CacheCluster extends AWSResource<CacheCluster_ResourceProperties> {
	constructor(name:string,properties:CacheCluster_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ElastiCache::CacheCluster",dependsOn);
	}
}

export interface CacheCluster_ResourceProperties extends AWSResourceProperties {
	AZMode?:AWSStringProperty;
	AutoMinorVersionUpgrade?:boolean;
	CacheNodeType:AWSStringProperty;
	CacheParameterGroupName?:AWSStringProperty;
	CacheSecurityGroupNames?:AWSStringListProperty;
	CacheSubnetGroupName?:AWSStringProperty;
	ClusterName?:AWSStringProperty;
	Engine:AWSStringProperty;
	EngineVersion?:AWSStringProperty;
	NotificationTopicArn?:AWSStringProperty;
	NumCacheNodes:number;
	Port?:number;
	PreferredAvailabilityZone?:AWSStringProperty;
	PreferredAvailabilityZones?:AWSStringListProperty;
	PreferredMaintenanceWindow?:AWSStringProperty;
	SnapshotArns?:AWSStringListProperty;
	SnapshotName?:AWSStringProperty;
	SnapshotRetentionLimit?:number;
	SnapshotWindow?:AWSStringProperty;
	Tags?:Tag[];
	VpcSecurityGroupIds?:AWSStringListProperty;

}
