import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class DBInstance extends AWSResource<DBInstance_ResourceProperties> {
    constructor(name: string, properties: DBInstance_ResourceProperties, dependsOn?: string[]);
}
export interface DBInstance_ResourceProperties extends AWSResourceProperties {
    DBInstanceClass: AWSStringProperty;
    DBClusterIdentifier: AWSStringProperty;
    AvailabilityZone?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    AutoMinorVersionUpgrade?: boolean;
    DBInstanceIdentifier?: AWSStringProperty;
    Tags?: Tag[];
}
