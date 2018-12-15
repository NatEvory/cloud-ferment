import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class FileSystem extends AWSResource<FileSystem_ResourceProperties> {
    constructor(name: string, properties: FileSystem_ResourceProperties);
}
export interface FileSystem_ResourceProperties extends AWSResourceProperties {
    Encrypted?: boolean;
    FileSystemTags?: FileSystem_ElasticFileSystemTag[];
    KmsKeyId?: AWSStringProperty;
    PerformanceMode?: AWSStringProperty;
    ProvisionedThroughputInMibps?: number;
    ThroughputMode?: AWSStringProperty;
}
export interface FileSystem_ElasticFileSystemTag {
    Key: AWSStringProperty;
    Value: AWSStringProperty;
}
