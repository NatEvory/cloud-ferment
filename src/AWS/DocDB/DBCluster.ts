import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DBCluster extends AWSResource<DBCluster_ResourceProperties> {
	constructor(name:string,properties:DBCluster_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::DocDB::DBCluster",dependsOn);
	}
}

export interface DBCluster_ResourceProperties extends AWSResourceProperties {
	StorageEncrypted?:boolean;
	EngineVersion?:AWSStringProperty;
	KmsKeyId?:AWSStringProperty;
	AvailabilityZones?:AWSStringListProperty;
	SnapshotIdentifier?:AWSStringProperty;
	Port?:number;
	DBClusterIdentifier?:AWSStringProperty;
	PreferredMaintenanceWindow?:AWSStringProperty;
	DBSubnetGroupName?:AWSStringProperty;
	PreferredBackupWindow?:AWSStringProperty;
	MasterUserPassword?:AWSStringProperty;
	VpcSecurityGroupIds?:AWSStringListProperty;
	MasterUsername?:AWSStringProperty;
	DBClusterParameterGroupName?:AWSStringProperty;
	BackupRetentionPeriod?:number;
	Tags?:Tag[];

}
