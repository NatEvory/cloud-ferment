import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SpotFleet extends AWSResource<SpotFleet_ResourceProperties> {
	constructor(name:string,properties:SpotFleet_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::EC2::SpotFleet",dependsOn);
	}
}

export interface SpotFleet_ResourceProperties extends AWSResourceProperties {
	SpotFleetRequestConfigData:SpotFleet_SpotFleetRequestConfigData;

}
export interface SpotFleet_ClassicLoadBalancer {
	Name:AWSStringProperty;

}
export interface SpotFleet_LaunchTemplateConfig {
	LaunchTemplateSpecification?:SpotFleet_FleetLaunchTemplateSpecification;
	Overrides?:SpotFleet_LaunchTemplateOverrides[];

}
export interface SpotFleet_IamInstanceProfileSpecification {
	Arn?:AWSStringProperty;

}
export interface SpotFleet_InstanceNetworkInterfaceSpecification {
	AssociatePublicIpAddress?:boolean;
	DeleteOnTermination?:boolean;
	Description?:AWSStringProperty;
	DeviceIndex?:number;
	Groups?:AWSStringListProperty;
	Ipv6AddressCount?:number;
	Ipv6Addresses?:SpotFleet_InstanceIpv6Address[];
	NetworkInterfaceId?:AWSStringProperty;
	PrivateIpAddresses?:SpotFleet_PrivateIpAddressSpecification[];
	SecondaryPrivateIpAddressCount?:number;
	SubnetId?:AWSStringProperty;

}
export interface SpotFleet_SpotFleetTagSpecification {
	ResourceType?:AWSStringProperty;
	Tags?:Tag[];

}
export interface SpotFleet_PrivateIpAddressSpecification {
	Primary?:boolean;
	PrivateIpAddress:AWSStringProperty;

}
export interface SpotFleet_SpotFleetLaunchSpecification {
	BlockDeviceMappings?:SpotFleet_BlockDeviceMapping[];
	EbsOptimized?:boolean;
	IamInstanceProfile?:SpotFleet_IamInstanceProfileSpecification;
	ImageId:AWSStringProperty;
	InstanceType:AWSStringProperty;
	KernelId?:AWSStringProperty;
	KeyName?:AWSStringProperty;
	Monitoring?:SpotFleet_SpotFleetMonitoring;
	NetworkInterfaces?:SpotFleet_InstanceNetworkInterfaceSpecification[];
	Placement?:SpotFleet_SpotPlacement;
	RamdiskId?:AWSStringProperty;
	SecurityGroups?:SpotFleet_GroupIdentifier[];
	SpotPrice?:AWSStringProperty;
	SubnetId?:AWSStringProperty;
	TagSpecifications?:SpotFleet_SpotFleetTagSpecification[];
	UserData?:AWSStringProperty;
	WeightedCapacity?:number;

}
export interface SpotFleet_ClassicLoadBalancersConfig {
	ClassicLoadBalancers:SpotFleet_ClassicLoadBalancer[];

}
export interface SpotFleet_SpotPlacement {
	AvailabilityZone?:AWSStringProperty;
	GroupName?:AWSStringProperty;
	Tenancy?:AWSStringProperty;

}
export interface SpotFleet_SpotFleetRequestConfigData {
	AllocationStrategy?:AWSStringProperty;
	ExcessCapacityTerminationPolicy?:AWSStringProperty;
	IamFleetRole:AWSStringProperty;
	InstanceInterruptionBehavior?:AWSStringProperty;
	LaunchSpecifications?:SpotFleet_SpotFleetLaunchSpecification[];
	LaunchTemplateConfigs?:SpotFleet_LaunchTemplateConfig[];
	LoadBalancersConfig?:SpotFleet_LoadBalancersConfig;
	ReplaceUnhealthyInstances?:boolean;
	SpotPrice?:AWSStringProperty;
	TargetCapacity:number;
	TerminateInstancesWithExpiration?:boolean;
	Type?:AWSStringProperty;
	ValidFrom?:AWSStringProperty;
	ValidUntil?:AWSStringProperty;

}
export interface SpotFleet_EbsBlockDevice {
	DeleteOnTermination?:boolean;
	Encrypted?:boolean;
	Iops?:number;
	SnapshotId?:AWSStringProperty;
	VolumeSize?:number;
	VolumeType?:AWSStringProperty;

}
export interface SpotFleet_LoadBalancersConfig {
	ClassicLoadBalancersConfig?:SpotFleet_ClassicLoadBalancersConfig;
	TargetGroupsConfig?:SpotFleet_TargetGroupsConfig;

}
export interface SpotFleet_FleetLaunchTemplateSpecification {
	LaunchTemplateId?:AWSStringProperty;
	LaunchTemplateName?:AWSStringProperty;
	Version:AWSStringProperty;

}
export interface SpotFleet_TargetGroup {
	Arn:AWSStringProperty;

}
export interface SpotFleet_InstanceIpv6Address {
	Ipv6Address:AWSStringProperty;

}
export interface SpotFleet_TargetGroupsConfig {
	TargetGroups:SpotFleet_TargetGroup[];

}
export interface SpotFleet_GroupIdentifier {
	GroupId:AWSStringProperty;

}
export interface SpotFleet_LaunchTemplateOverrides {
	AvailabilityZone?:AWSStringProperty;
	InstanceType?:AWSStringProperty;
	SpotPrice?:AWSStringProperty;
	SubnetId?:AWSStringProperty;
	WeightedCapacity?:number;

}
export interface SpotFleet_SpotFleetMonitoring {
	Enabled?:boolean;

}
export interface SpotFleet_BlockDeviceMapping {
	DeviceName:AWSStringProperty;
	Ebs?:SpotFleet_EbsBlockDevice;
	NoDevice?:AWSStringProperty;
	VirtualName?:AWSStringProperty;

}
