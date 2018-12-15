import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Instance extends AWSResource<Instance_ResourceProperties> {
	constructor(name:string,properties:Instance_ResourceProperties){
		super(name,properties,"AWS::OpsWorks::Instance");
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
	Friday?:Map<string,AWSStringProperty>;
	Monday?:Map<string,AWSStringProperty>;
	Saturday?:Map<string,AWSStringProperty>;
	Sunday?:Map<string,AWSStringProperty>;
	Thursday?:Map<string,AWSStringProperty>;
	Tuesday?:Map<string,AWSStringProperty>;
	Wednesday?:Map<string,AWSStringProperty>;

}
