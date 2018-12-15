import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Service extends AWSResource<Service_ResourceProperties> {
	constructor(name:string,properties:Service_ResourceProperties){
		super(name,properties,"AWS::ECS::Service");
	}
}

export interface Service_ResourceProperties extends AWSResourceProperties {
	Cluster?:AWSStringProperty;
	DeploymentConfiguration?:Service_DeploymentConfiguration;
	DesiredCount?:number;
	HealthCheckGracePeriodSeconds?:number;
	LaunchType?:AWSStringProperty;
	LoadBalancers?:Service_LoadBalancer[];
	NetworkConfiguration?:Service_NetworkConfiguration;
	PlacementConstraints?:Service_PlacementConstraint[];
	PlacementStrategies?:Service_PlacementStrategy[];
	PlatformVersion?:AWSStringProperty;
	Role?:AWSStringProperty;
	SchedulingStrategy?:AWSStringProperty;
	ServiceName?:AWSStringProperty;
	ServiceRegistries?:Service_ServiceRegistry[];
	TaskDefinition:AWSStringProperty;

}
export interface Service_LoadBalancer {
	ContainerName?:AWSStringProperty;
	ContainerPort:number;
	LoadBalancerName?:AWSStringProperty;
	TargetGroupArn?:AWSStringProperty;

}
export interface Service_PlacementStrategy {
	Field?:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface Service_ServiceRegistry {
	ContainerName?:AWSStringProperty;
	ContainerPort?:number;
	Port?:number;
	RegistryArn?:AWSStringProperty;

}
export interface Service_DeploymentConfiguration {
	MaximumPercent?:number;
	MinimumHealthyPercent?:number;

}
export interface Service_PlacementConstraint {
	Expression?:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface Service_AwsVpcConfiguration {
	AssignPublicIp?:AWSStringProperty;
	SecurityGroups?:AWSStringListProperty;
	Subnets:AWSStringListProperty;

}
export interface Service_NetworkConfiguration {
	AwsvpcConfiguration?:Service_AwsVpcConfiguration;

}
