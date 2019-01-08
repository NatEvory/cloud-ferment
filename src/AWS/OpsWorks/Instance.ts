import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Instance extends AWSResource<Instance_ResourceProperties> {
	constructor(name:string,properties:Instance_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::OpsWorks::Instance",dependsOn);
	}
}

export interface Instance_ResourceProperties extends AWSResourceProperties {
	AgentVersion?:AWSStringProperty;
	AmiId?:AWSStringProperty;
	Architecture?:AWSStringProperty;
	AutoScalingType?:AWSStringProperty;
	AvailabilityZone?:AWSStringProperty;
	BlockDeviceMappings?:Instance_BlockDeviceMapping[];
	EbsOptimized?:boolean;
	ElasticIps?:AWSStringListProperty;
	Hostname?:AWSStringProperty;
	InstallUpdatesOnBoot?:boolean;
	InstanceType:AWSStringProperty;
	LayerIds:AWSStringListProperty;
	Os?:AWSStringProperty;
	RootDeviceType?:AWSStringProperty;
	SshKeyName?:AWSStringProperty;
	StackId:AWSStringProperty;
	SubnetId?:AWSStringProperty;
	Tenancy?:AWSStringProperty;
	TimeBasedAutoScaling?:Instance_TimeBasedAutoScaling;
	VirtualizationType?:AWSStringProperty;
	Volumes?:AWSStringListProperty;

}
export interface Instance_BlockDeviceMapping {
	DeviceName?:AWSStringProperty;
	Ebs?:Instance_EbsBlockDevice;
	NoDevice?:AWSStringProperty;
	VirtualName?:AWSStringProperty;

}
export interface Instance_EbsBlockDevice {
	DeleteOnTermination?:boolean;
	Iops?:number;
	SnapshotId?:AWSStringProperty;
	VolumeSize?:number;
	VolumeType?:AWSStringProperty;

}
export interface Instance_TimeBasedAutoScaling {
	Friday?:{[key:string]:AWSStringProperty};
	Monday?:{[key:string]:AWSStringProperty};
	Saturday?:{[key:string]:AWSStringProperty};
	Sunday?:{[key:string]:AWSStringProperty};
	Thursday?:{[key:string]:AWSStringProperty};
	Tuesday?:{[key:string]:AWSStringProperty};
	Wednesday?:{[key:string]:AWSStringProperty};

}
