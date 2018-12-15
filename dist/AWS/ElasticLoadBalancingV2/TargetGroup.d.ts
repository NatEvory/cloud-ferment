import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class TargetGroup extends AWSResource<TargetGroup_ResourceProperties> {
    constructor(name: string, properties: TargetGroup_ResourceProperties);
}
export interface TargetGroup_ResourceProperties extends AWSResourceProperties {
    HealthCheckIntervalSeconds?: number;
    HealthCheckPath?: AWSStringProperty;
    HealthCheckPort?: AWSStringProperty;
    HealthCheckProtocol?: AWSStringProperty;
    HealthCheckTimeoutSeconds?: number;
    HealthyThresholdCount?: number;
    Matcher?: TargetGroup_Matcher;
    Name?: AWSStringProperty;
    Port: number;
    Protocol: AWSStringProperty;
    Tags?: Tag[];
    TargetGroupAttributes?: TargetGroup_TargetGroupAttribute[];
    TargetType?: AWSStringProperty;
    Targets?: TargetGroup_TargetDescription[];
    UnhealthyThresholdCount?: number;
    VpcId: AWSStringProperty;
}
export interface TargetGroup_TargetGroupAttribute {
    Key?: AWSStringProperty;
    Value?: AWSStringProperty;
}
export interface TargetGroup_Matcher {
    HttpCode: AWSStringProperty;
}
export interface TargetGroup_TargetDescription {
    AvailabilityZone?: AWSStringProperty;
    Id: AWSStringProperty;
    Port?: number;
}
