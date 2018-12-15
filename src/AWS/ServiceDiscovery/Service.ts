import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Service extends AWSResource<Service_ResourceProperties> {
	constructor(name:string,properties:Service_ResourceProperties){
		super(name,properties,"AWS::ServiceDiscovery::Service");
	}
}

export interface Service_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	HealthCheckCustomConfig?:Service_HealthCheckCustomConfig;
	DnsConfig?:Service_DnsConfig;
	NamespaceId?:AWSStringProperty;
	HealthCheckConfig?:Service_HealthCheckConfig;
	Name?:AWSStringProperty;

}
export interface Service_DnsConfig {
	DnsRecords:Service_DnsRecord[];
	RoutingPolicy?:AWSStringProperty;
	NamespaceId?:AWSStringProperty;

}
export interface Service_DnsRecord {
	Type:AWSStringProperty;
	TTL:AWSStringProperty;

}
export interface Service_HealthCheckCustomConfig {
	FailureThreshold?:number;

}
export interface Service_HealthCheckConfig {
	Type:AWSStringProperty;
	ResourcePath?:AWSStringProperty;
	FailureThreshold?:number;

}
