import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class ConfigurationSetEventDestination extends AWSResource<ConfigurationSetEventDestination_ResourceProperties> {
    constructor(name: string, properties: ConfigurationSetEventDestination_ResourceProperties);
}
export interface ConfigurationSetEventDestination_ResourceProperties extends AWSResourceProperties {
    ConfigurationSetName: AWSStringProperty;
    EventDestination: ConfigurationSetEventDestination_EventDestination;
}
export interface ConfigurationSetEventDestination_EventDestination {
    CloudWatchDestination?: ConfigurationSetEventDestination_CloudWatchDestination;
    Enabled?: boolean;
    MatchingEventTypes: AWSStringListProperty;
    Name?: AWSStringProperty;
    KinesisFirehoseDestination?: ConfigurationSetEventDestination_KinesisFirehoseDestination;
}
export interface ConfigurationSetEventDestination_CloudWatchDestination {
    DimensionConfigurations?: ConfigurationSetEventDestination_DimensionConfiguration[];
}
export interface ConfigurationSetEventDestination_KinesisFirehoseDestination {
    IAMRoleARN: AWSStringProperty;
    DeliveryStreamARN: AWSStringProperty;
}
export interface ConfigurationSetEventDestination_DimensionConfiguration {
    DimensionValueSource: AWSStringProperty;
    DefaultDimensionValue: AWSStringProperty;
    DimensionName: AWSStringProperty;
}
