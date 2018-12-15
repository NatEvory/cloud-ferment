import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Volume extends AWSResource<Volume_ResourceProperties> {
	constructor(name:string,properties:Volume_ResourceProperties){
		super(name,properties,"AWS::EC2::Volume");
	}
}

export interface Volume_ResourceProperties extends AWSResourceProperties {
	AutoEnableIO?:boolean;
	AvailabilityZone:AWSStringProperty;
	Encrypted?:boolean;
	Iops?:number;
	KmsKeyId?:AWSStringProperty;
	Size?:number;
	SnapshotId?:AWSStringProperty;
	Tags?:Tag[];
	VolumeType?:AWSStringProperty;

}
