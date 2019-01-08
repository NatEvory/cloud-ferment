import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ReplicationInstance extends AWSResource<ReplicationInstance_ResourceProperties> {
    constructor(name: string, properties: ReplicationInstance_ResourceProperties, dependsOn?: string[]);
}
export interface ReplicationInstance_ResourceProperties extends AWSResourceProperties {
    ReplicationInstanceIdentifier?: AWSStringProperty;
    EngineVersion?: AWSStringProperty;
    KmsKeyId?: AWSStringProperty;
    AvailabilityZone?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    AutoMinorVersionUpgrade?: boolean;
    ReplicationSubnetGroupIdentifier?: AWSStringProperty;
    AllocatedStorage?: number;
    VpcSecurityGroupIds?: AWSStringListProperty;
    AllowMajorVersionUpgrade?: boolean;
    ReplicationInstanceClass: AWSStringProperty;
    PubliclyAccessible?: boolean;
    MultiAZ?: boolean;
    Tags?: Tag[];
}
