import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Stack extends AWSResource<Stack_ResourceProperties> {
    constructor(name: string, properties: Stack_ResourceProperties);
}
export interface Stack_ResourceProperties extends AWSResourceProperties {
    ApplicationSettings?: Stack_ApplicationSettings;
    Description?: AWSStringProperty;
    StorageConnectors?: Stack_StorageConnector[];
    DeleteStorageConnectors?: boolean;
    UserSettings?: Stack_UserSetting[];
    AttributesToDelete?: AWSStringListProperty;
    DisplayName?: AWSStringProperty;
    RedirectURL?: AWSStringProperty;
    Name?: AWSStringProperty;
    FeedbackURL?: AWSStringProperty;
}
export interface Stack_ApplicationSettings {
    SettingsGroup?: AWSStringProperty;
    Enabled: boolean;
}
export interface Stack_StorageConnector {
    Domains?: AWSStringListProperty;
    ResourceIdentifier?: AWSStringProperty;
    ConnectorType: AWSStringProperty;
}
export interface Stack_UserSetting {
    Action: AWSStringProperty;
    Permission: AWSStringProperty;
}
