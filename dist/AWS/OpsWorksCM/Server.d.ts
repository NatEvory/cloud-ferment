import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Server extends AWSResource<Server_ResourceProperties> {
    constructor(name: string, properties: Server_ResourceProperties);
}
export interface Server_ResourceProperties extends AWSResourceProperties {
    KeyPair?: AWSStringProperty;
    EngineVersion?: AWSStringProperty;
    ServiceRoleArn: AWSStringProperty;
    DisableAutomatedBackup?: boolean;
    BackupId?: AWSStringProperty;
    EngineModel?: AWSStringProperty;
    PreferredMaintenanceWindow?: AWSStringProperty;
    InstanceProfileArn: AWSStringProperty;
    PreferredBackupWindow?: AWSStringProperty;
    SecurityGroupIds?: AWSStringListProperty;
    SubnetIds?: AWSStringListProperty;
    ServerName?: AWSStringProperty;
    EngineAttributes?: Server_EngineAttribute[];
    BackupRetentionCount?: number;
    InstanceType: AWSStringProperty;
    Engine?: AWSStringProperty;
}
export interface Server_EngineAttribute {
    Value?: AWSStringProperty;
    Name?: AWSStringProperty;
}
