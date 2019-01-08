import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DBCluster extends AWSResource<DBCluster_ResourceProperties> {
    constructor(name: string, properties: DBCluster_ResourceProperties, dependsOn?: string[]);
}
export interface DBCluster_ResourceProperties extends AWSResourceProperties {
    StorageEncrypted?: boolean;
    KmsKeyId?: AWSStringProperty;
    AvailabilityZones?: AWSStringListProperty;
    SnapshotIdentifier?: AWSStringProperty;
    Port?: number;
    DBClusterIdentifier?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    IamAuthEnabled?: boolean;
    DBSubnetGroupName?: AWSStringProperty;
    PreferredBackupWindow?: AWSStringProperty;
    VpcSecurityGroupIds?: AWSStringListProperty;
    DBClusterParameterGroupName?: AWSStringProperty;
    BackupRetentionPeriod?: number;
    Tags?: Tag[];
}
