import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class MountTarget extends AWSResource<MountTarget_ResourceProperties> {
	constructor(name:string,properties:MountTarget_ResourceProperties){
		super(name,properties,"AWS::EFS::MountTarget");
	}
}

export interface MountTarget_ResourceProperties extends AWSResourceProperties {
	FileSystemId:AWSStringProperty;
	IpAddress?:AWSStringProperty;
	SecurityGroups:AWSStringListProperty;
	SubnetId:AWSStringProperty;

}
