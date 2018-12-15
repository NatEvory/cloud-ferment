import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class HostedZone extends AWSResource<HostedZone_ResourceProperties> {
    constructor(name: string, properties: HostedZone_ResourceProperties);
}
export interface HostedZone_ResourceProperties extends AWSResourceProperties {
    HostedZoneConfig?: HostedZone_HostedZoneConfig;
    HostedZoneTags?: HostedZone_HostedZoneTag[];
    Name: AWSStringProperty;
    QueryLoggingConfig?: HostedZone_QueryLoggingConfig;
    VPCs?: HostedZone_VPC[];
}
export interface HostedZone_HostedZoneTag {
    Key: AWSStringProperty;
    Value: AWSStringProperty;
}
export interface HostedZone_HostedZoneConfig {
    Comment?: AWSStringProperty;
}
export interface HostedZone_QueryLoggingConfig {
    CloudWatchLogsLogGroupArn: AWSStringProperty;
}
export interface HostedZone_VPC {
    VPCId: AWSStringProperty;
    VPCRegion: AWSStringProperty;
}
