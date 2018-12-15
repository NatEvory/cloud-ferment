import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DBCluster extends AWSResource<DBCluster_ResourceProperties> {
    constructor(name: string, properties: DBCluster_ResourceProperties);
}
export interface DBCluster_ResourceProperties extends AWSResourceProperties {
    AvailabilityZones?: AWSStringListProperty;
    BacktrackWindow?: number;
    BackupRetentionPeriod?: number;
    DBClusterIdentifier?: AWSStringProperty;
    DBClusterParameterGroupName?: AWSStringProperty;
    DBSubnetGroupName?: AWSStringProperty;
    DatabaseName?: AWSStringProperty;
    DeletionProtection?: boolean;
    EnableCloudwatchLogsExports?: AWSStringListProperty;
    EnableIAMDatabaseAuthentication?: boolean;
    Engine: AWSStringProperty;
    EngineMode?: AWSStringProperty;
    EngineVersion?: AWSStringProperty;
    KmsKeyId?: AWSStringProperty;
    MasterUserPassword?: AWSStringProperty;
    MasterUsername?: AWSStringProperty;
    Port?: number;
    PreferredBackupWindow?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    ReplicationSourceIdentifier?: AWSStringProperty;
    ScalingConfiguration?: DBCluster_ScalingConfiguration;
    SnapshotIdentifier?: AWSStringProperty;
    StorageEncrypted?: boolean;
    Tags?: Tag[];
    VpcSecurityGroupIds?: AWSStringListProperty;
}
export interface DBCluster_ScalingConfiguration {
    AutoPause?: boolean;
    MaxCapacity?: number;
    MinCapacity?: number;
    SecondsUntilAutoPause?: number;
}
