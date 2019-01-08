import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Cluster extends AWSResource<Cluster_ResourceProperties> {
	constructor(name:string,properties:Cluster_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Redshift::Cluster",dependsOn);
	}
}

export interface Cluster_ResourceProperties extends AWSResourceProperties {
	AllowVersionUpgrade?:boolean;
	AutomatedSnapshotRetentionPeriod?:number;
	AvailabilityZone?:AWSStringProperty;
	ClusterIdentifier?:AWSStringProperty;
	ClusterParameterGroupName?:AWSStringProperty;
	ClusterSecurityGroups?:AWSStringListProperty;
	ClusterSubnetGroupName?:AWSStringProperty;
	ClusterType:AWSStringProperty;
	ClusterVersion?:AWSStringProperty;
	DBName:AWSStringProperty;
	ElasticIp?:AWSStringProperty;
	Encrypted?:boolean;
	HsmClientCertificateIdentifier?:AWSStringProperty;
	HsmConfigurationIdentifier?:AWSStringProperty;
	IamRoles?:AWSStringListProperty;
	KmsKeyId?:AWSStringProperty;
	LoggingProperties?:Cluster_LoggingProperties;
	MasterUserPassword:AWSStringProperty;
	MasterUsername:AWSStringProperty;
	NodeType:AWSStringProperty;
	NumberOfNodes?:number;
	OwnerAccount?:AWSStringProperty;
	Port?:number;
	PreferredMaintenanceWindow?:AWSStringProperty;
	PubliclyAccessible?:boolean;
	SnapshotClusterIdentifier?:AWSStringProperty;
	SnapshotIdentifier?:AWSStringProperty;
	Tags?:Tag[];
	VpcSecurityGroupIds?:AWSStringListProperty;

}
export interface Cluster_LoggingProperties {
	BucketName:AWSStringProperty;
	S3KeyPrefix?:AWSStringProperty;

}
