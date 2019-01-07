import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class InstanceFleetConfig extends AWSResource<InstanceFleetConfig_ResourceProperties> {
	constructor(name:string,properties:InstanceFleetConfig_ResourceProperties){
		super(name,properties,"AWS::EMR::InstanceFleetConfig");
	}
}

export interface InstanceFleetConfig_ResourceProperties extends AWSResourceProperties {
	ClusterId:AWSStringProperty;
	InstanceFleetType:AWSStringProperty;
	InstanceTypeConfigs?:InstanceFleetConfig_InstanceTypeConfig[];
	LaunchSpecifications?:InstanceFleetConfig_InstanceFleetProvisioningSpecifications;
	Name?:AWSStringProperty;
	TargetOnDemandCapacity?:number;
	TargetSpotCapacity?:number;

}
export interface InstanceFleetConfig_VolumeSpecification {
	Iops?:number;
	SizeInGB:number;
	VolumeType:AWSStringProperty;

}
export interface InstanceFleetConfig_SpotProvisioningSpecification {
	BlockDurationMinutes?:number;
	TimeoutAction:AWSStringProperty;
	TimeoutDurationMinutes:number;

}
export interface InstanceFleetConfig_Configuration {
	Classification?:AWSStringProperty;
	ConfigurationProperties?:{[key:string]:AWSStringProperty};
	Configurations?:InstanceFleetConfig_Configuration[];

}
export interface InstanceFleetConfig_EbsConfiguration {
	EbsBlockDeviceConfigs?:InstanceFleetConfig_EbsBlockDeviceConfig[];
	EbsOptimized?:boolean;

}
export interface InstanceFleetConfig_InstanceTypeConfig {
	BidPrice?:AWSStringProperty;
	BidPriceAsPercentageOfOnDemandPrice?:number;
	Configurations?:InstanceFleetConfig_Configuration[];
	EbsConfiguration?:InstanceFleetConfig_EbsConfiguration;
	InstanceType:AWSStringProperty;
	WeightedCapacity?:number;

}
export interface InstanceFleetConfig_InstanceFleetProvisioningSpecifications {
	SpotSpecification:InstanceFleetConfig_SpotProvisioningSpecification;

}
export interface InstanceFleetConfig_EbsBlockDeviceConfig {
	VolumeSpecification:InstanceFleetConfig_VolumeSpecification;
	VolumesPerInstance?:number;

}
