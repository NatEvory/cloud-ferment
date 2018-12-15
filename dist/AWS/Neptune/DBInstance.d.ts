import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBInstance extends AWSResource<DBInstance_ResourceProperties> {
    constructor(name: string, properties: DBInstance_ResourceProperties);
}
export interface DBInstance_ResourceProperties extends AWSResourceProperties {
    DBParameterGroupName?: AWSStringProperty;
    DBInstanceClass: AWSStringProperty;
    AllowMajorVersionUpgrade?: boolean;
    DBClusterIdentifier?: AWSStringProperty;
    AvailabilityZone?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    AutoMinorVersionUpgrade?: boolean;
    DBSubnetGroupName?: AWSStringProperty;
    DBInstanceIdentifier?: AWSStringProperty;
    DBSnapshotIdentifier?: AWSStringProperty;
    Tags?: Tag[];
}
