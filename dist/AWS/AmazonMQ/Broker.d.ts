import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Broker extends AWSResource<Broker_ResourceProperties> {
    constructor(name: string, properties: Broker_ResourceProperties, dependsOn?: string[]);
}
export interface Broker_ResourceProperties extends AWSResourceProperties {
    SecurityGroups?: AWSStringListProperty;
    EngineVersion: AWSStringProperty;
    Configuration?: Broker_ConfigurationId;
    MaintenanceWindowStartTime?: Broker_MaintenanceWindow;
    HostInstanceType: AWSStringProperty;
    AutoMinorVersionUpgrade: boolean;
    Users: Broker_User[];
    Logs?: Broker_LogList;
    SubnetIds?: AWSStringListProperty;
    BrokerName: AWSStringProperty;
    DeploymentMode: AWSStringProperty;
    EngineType: AWSStringProperty;
    PubliclyAccessible: boolean;
}
export interface Broker_User {
    Username: AWSStringProperty;
    Groups?: AWSStringListProperty;
    ConsoleAccess?: boolean;
    Password: AWSStringProperty;
}
export interface Broker_MaintenanceWindow {
    DayOfWeek: AWSStringProperty;
    TimeOfDay: AWSStringProperty;
    TimeZone: AWSStringProperty;
}
export interface Broker_LogList {
    Audit?: boolean;
    General?: boolean;
}
export interface Broker_ConfigurationId {
    Revision: number;
    Id: AWSStringProperty;
}
