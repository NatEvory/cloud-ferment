import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class FileSystem extends AWSResource<FileSystem_ResourceProperties> {
	constructor(name:string,properties:FileSystem_ResourceProperties){
		super(name,properties,"AWS::EFS::FileSystem");
	}
}

export interface FileSystem_ResourceProperties extends AWSResourceProperties {
	Encrypted?:boolean;
	FileSystemTags?:FileSystem_ElasticFileSystemTag[];
	KmsKeyId?:AWSStringProperty;
	PerformanceMode?:AWSStringProperty;
	ProvisionedThroughputInMibps?:number;
	ThroughputMode?:AWSStringProperty;

}
export interface FileSystem_ElasticFileSystemTag {
	Key:AWSStringProperty;
	Value:AWSStringProperty;

}
