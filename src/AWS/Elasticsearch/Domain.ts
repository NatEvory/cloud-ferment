import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Domain extends AWSResource<Domain_ResourceProperties> {
	constructor(name:string,properties:Domain_ResourceProperties){
		super(name,properties,"AWS::Elasticsearch::Domain");
	}
}

export interface Domain_ResourceProperties extends AWSResourceProperties {
	AccessPolicies?:any;
	AdvancedOptions?:Map<string,AWSStringProperty>;
	DomainName?:AWSStringProperty;
	EBSOptions?:Domain_EBSOptions;
	ElasticsearchClusterConfig?:Domain_ElasticsearchClusterConfig;
	ElasticsearchVersion?:AWSStringProperty;
	EncryptionAtRestOptions?:Domain_EncryptionAtRestOptions;
	SnapshotOptions?:Domain_SnapshotOptions;
	Tags?:Tag[];
	VPCOptions?:Domain_VPCOptions;

}
export interface Domain_VPCOptions {
	SecurityGroupIds?:AWSStringListProperty;
	SubnetIds?:AWSStringListProperty;

}
export interface Domain_ElasticsearchClusterConfig {
	DedicatedMasterCount?:number;
	DedicatedMasterEnabled?:boolean;
	DedicatedMasterType?:AWSStringProperty;
	InstanceCount?:number;
	InstanceType?:AWSStringProperty;
	ZoneAwarenessEnabled?:boolean;

}
export interface Domain_SnapshotOptions {
	AutomatedSnapshotStartHour?:number;

}
export interface Domain_EBSOptions {
	EBSEnabled?:boolean;
	Iops?:number;
	VolumeSize?:number;
	VolumeType?:AWSStringProperty;

}
export interface Domain_EncryptionAtRestOptions {
	Enabled?:boolean;
	KmsKeyId?:AWSStringProperty;

}
