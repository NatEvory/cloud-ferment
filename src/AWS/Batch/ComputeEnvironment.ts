import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ComputeEnvironment extends AWSResource<ComputeEnvironment_ResourceProperties> {
	constructor(name:string,properties:ComputeEnvironment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Batch::ComputeEnvironment",dependsOn);
	}
}

export interface ComputeEnvironment_ResourceProperties extends AWSResourceProperties {
	Type:AWSStringProperty;
	ServiceRole:AWSStringProperty;
	ComputeEnvironmentName?:AWSStringProperty;
	ComputeResources?:ComputeEnvironment_ComputeResources;
	State?:AWSStringProperty;

}
export interface ComputeEnvironment_LaunchTemplateSpecification {
	LaunchTemplateName?:AWSStringProperty;
	Version?:AWSStringProperty;
	LaunchTemplateId?:AWSStringProperty;

}
export interface ComputeEnvironment_ComputeResources {
	SpotIamFleetRole?:AWSStringProperty;
	MaxvCpus:number;
	BidPercentage?:number;
	SecurityGroupIds:AWSStringListProperty;
	Subnets:AWSStringListProperty;
	Type:AWSStringProperty;
	MinvCpus:number;
	LaunchTemplate?:ComputeEnvironment_LaunchTemplateSpecification;
	ImageId?:AWSStringProperty;
	InstanceRole:AWSStringProperty;
	InstanceTypes:AWSStringListProperty;
	Ec2KeyPair?:AWSStringProperty;
	PlacementGroup?:AWSStringProperty;
	Tags?:any;
	DesiredvCpus?:number;

}
