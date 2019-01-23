import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class DBInstance extends AWSResource<DBInstance_ResourceProperties> {
    constructor(name: string, properties: DBInstance_ResourceProperties, dependsOn?: string[]);
}
export interface DBInstance_ResourceProperties extends AWSResourceProperties {
    AllocatedStorage?: AWSStringProperty;
    AllowMajorVersionUpgrade?: boolean;
    AutoMinorVersionUpgrade?: boolean;
    AvailabilityZone?: AWSStringProperty;
    BackupRetentionPeriod?: AWSStringProperty;
    CharacterSetName?: AWSStringProperty;
    CopyTagsToSnapshot?: boolean;
    DBClusterIdentifier?: AWSStringProperty;
    DBInstanceClass: AWSStringProperty;
    DBInstanceIdentifier?: AWSStringProperty;
    DBName?: AWSStringProperty;
    DBParameterGroupName?: AWSStringProperty;
    DBSecurityGroups?: AWSStringListProperty;
    DBSnapshotIdentifier?: AWSStringProperty;
    DBSubnetGroupName?: AWSStringProperty;
    DeleteAutomatedBackups?: boolean;
    DeletionProtection?: boolean;
    Domain?: AWSStringProperty;
    DomainIAMRoleName?: AWSStringProperty;
    EnableCloudwatchLogsExports?: AWSStringListProperty;
    EnableIAMDatabaseAuthentication?: boolean;
    EnablePerformanceInsights?: boolean;
    Engine?: AWSStringProperty;
    EngineVersion?: AWSStringProperty;
    Iops?: number;
    KmsKeyId?: AWSStringProperty;
    LicenseModel?: AWSStringProperty;
    MasterUserPassword?: AWSStringProperty;
    MasterUsername?: AWSStringProperty;
    MonitoringInterval?: number;
    MonitoringRoleArn?: AWSStringProperty;
    MultiAZ?: boolean;
    OptionGroupName?: AWSStringProperty;
    PerformanceInsightsKMSKeyId?: AWSStringProperty;
    PerformanceInsightsRetentionPeriod?: number;
    Port?: AWSStringProperty;
    PreferredBackupWindow?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    ProcessorFeatures?: DBInstance_ProcessorFeature[];
    PromotionTier?: number;
    PubliclyAccessible?: boolean;
    SourceDBInstanceIdentifier?: AWSStringProperty;
    SourceRegion?: AWSStringProperty;
    StorageEncrypted?: boolean;
    StorageType?: AWSStringProperty;
    Tags?: Tag[];
    Timezone?: AWSStringProperty;
    UseDefaultProcessorFeatures?: boolean;
    VPCSecurityGroups?: AWSStringListProperty;
}
export interface DBInstance_ProcessorFeature {
    Name?: AWSStringProperty;
    Value?: AWSStringProperty;
}
