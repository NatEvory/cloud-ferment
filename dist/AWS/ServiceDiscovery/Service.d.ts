import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Service extends AWSResource<Service_ResourceProperties> {
    constructor(name: string, properties: Service_ResourceProperties);
}
export interface Service_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    HealthCheckCustomConfig?: Service_HealthCheckCustomConfig;
    DnsConfig?: Service_DnsConfig;
    NamespaceId?: AWSStringProperty;
    HealthCheckConfig?: Service_HealthCheckConfig;
    Name?: AWSStringProperty;
}
export interface Service_DnsConfig {
    DnsRecords: Service_DnsRecord[];
    RoutingPolicy?: AWSStringProperty;
    NamespaceId?: AWSStringProperty;
}
export interface Service_DnsRecord {
    Type: AWSStringProperty;
    TTL: AWSStringProperty;
}
export interface Service_HealthCheckCustomConfig {
    FailureThreshold?: number;
}
export interface Service_HealthCheckConfig {
    Type: AWSStringProperty;
    ResourcePath?: AWSStringProperty;
    FailureThreshold?: number;
}
