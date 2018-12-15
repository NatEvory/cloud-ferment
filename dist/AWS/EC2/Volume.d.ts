import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Volume extends AWSResource<Volume_ResourceProperties> {
    constructor(name: string, properties: Volume_ResourceProperties);
}
export interface Volume_ResourceProperties extends AWSResourceProperties {
    AutoEnableIO?: boolean;
    AvailabilityZone: AWSStringProperty;
    Encrypted?: boolean;
    Iops?: number;
    KmsKeyId?: AWSStringProperty;
    Size?: number;
    SnapshotId?: AWSStringProperty;
    Tags?: Tag[];
    VolumeType?: AWSStringProperty;
}
