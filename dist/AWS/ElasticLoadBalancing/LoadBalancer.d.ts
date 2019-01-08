import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class LoadBalancer extends AWSResource<LoadBalancer_ResourceProperties> {
    constructor(name: string, properties: LoadBalancer_ResourceProperties, dependsOn?: string[]);
}
export interface LoadBalancer_ResourceProperties extends AWSResourceProperties {
    AccessLoggingPolicy?: LoadBalancer_AccessLoggingPolicy;
    AppCookieStickinessPolicy?: LoadBalancer_AppCookieStickinessPolicy[];
    AvailabilityZones?: AWSStringListProperty;
    ConnectionDrainingPolicy?: LoadBalancer_ConnectionDrainingPolicy;
    ConnectionSettings?: LoadBalancer_ConnectionSettings;
    CrossZone?: boolean;
    HealthCheck?: LoadBalancer_HealthCheck;
    Instances?: AWSStringListProperty;
    LBCookieStickinessPolicy?: LoadBalancer_LBCookieStickinessPolicy[];
    Listeners: LoadBalancer_Listeners[];
    LoadBalancerName?: AWSStringProperty;
    Policies?: LoadBalancer_Policies[];
    Scheme?: AWSStringProperty;
    SecurityGroups?: AWSStringListProperty;
    Subnets?: AWSStringListProperty;
    Tags?: Tag[];
}
export interface LoadBalancer_HealthCheck {
    HealthyThreshold: AWSStringProperty;
    Interval: AWSStringProperty;
    Target: AWSStringProperty;
    Timeout: AWSStringProperty;
    UnhealthyThreshold: AWSStringProperty;
}
export interface LoadBalancer_AccessLoggingPolicy {
    EmitInterval?: number;
    Enabled: boolean;
    S3BucketName: AWSStringProperty;
    S3BucketPrefix?: AWSStringProperty;
}
export interface LoadBalancer_ConnectionSettings {
    IdleTimeout: number;
}
export interface LoadBalancer_LBCookieStickinessPolicy {
    CookieExpirationPeriod?: AWSStringProperty;
    PolicyName?: AWSStringProperty;
}
export interface LoadBalancer_ConnectionDrainingPolicy {
    Enabled: boolean;
    Timeout?: number;
}
export interface LoadBalancer_Listeners {
    InstancePort: AWSStringProperty;
    InstanceProtocol?: AWSStringProperty;
    LoadBalancerPort: AWSStringProperty;
    PolicyNames?: AWSStringListProperty;
    Protocol: AWSStringProperty;
    SSLCertificateId?: AWSStringProperty;
}
export interface LoadBalancer_Policies {
    Attributes: any[];
    InstancePorts?: AWSStringListProperty;
    LoadBalancerPorts?: AWSStringListProperty;
    PolicyName: AWSStringProperty;
    PolicyType: AWSStringProperty;
}
export interface LoadBalancer_AppCookieStickinessPolicy {
    CookieName: AWSStringProperty;
    PolicyName: AWSStringProperty;
}
