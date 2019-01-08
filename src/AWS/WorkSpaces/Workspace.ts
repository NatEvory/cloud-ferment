import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Workspace extends AWSResource<Workspace_ResourceProperties> {
	constructor(name:string,properties:Workspace_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::WorkSpaces::Workspace",dependsOn);
	}
}

export interface Workspace_ResourceProperties extends AWSResourceProperties {
	BundleId:AWSStringProperty;
	DirectoryId:AWSStringProperty;
	RootVolumeEncryptionEnabled?:boolean;
	Tags?:Tag[];
	UserName:AWSStringProperty;
	UserVolumeEncryptionEnabled?:boolean;
	VolumeEncryptionKey?:AWSStringProperty;
	WorkspaceProperties?:Workspace_WorkspaceProperties;

}
export interface Workspace_WorkspaceProperties {
	ComputeTypeName?:AWSStringProperty;
	RootVolumeSizeGib?:number;
	RunningMode?:AWSStringProperty;
	RunningModeAutoStopTimeoutInMinutes?:number;
	UserVolumeSizeGib?:number;

}
