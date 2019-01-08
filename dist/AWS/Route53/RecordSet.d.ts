import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class RecordSet extends AWSResource<RecordSet_ResourceProperties> {
    constructor(name: string, properties: RecordSet_ResourceProperties, dependsOn?: string[]);
}
export interface RecordSet_ResourceProperties extends AWSResourceProperties {
    AliasTarget?: RecordSet_AliasTarget;
    Comment?: AWSStringProperty;
    Failover?: AWSStringProperty;
    GeoLocation?: RecordSet_GeoLocation;
    HealthCheckId?: AWSStringProperty;
    HostedZoneId?: AWSStringProperty;
    HostedZoneName?: AWSStringProperty;
    MultiValueAnswer?: boolean;
    Name: AWSStringProperty;
    Region?: AWSStringProperty;
    ResourceRecords?: AWSStringListProperty;
    SetIdentifier?: AWSStringProperty;
    TTL?: AWSStringProperty;
    Type: AWSStringProperty;
    Weight?: number;
}
export interface RecordSet_GeoLocation {
    ContinentCode?: AWSStringProperty;
    CountryCode?: AWSStringProperty;
    SubdivisionCode?: AWSStringProperty;
}
export interface RecordSet_AliasTarget {
    DNSName: AWSStringProperty;
    EvaluateTargetHealth?: boolean;
    HostedZoneId: AWSStringProperty;
}
