import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Stream extends AWSResource<Stream_ResourceProperties> {
    constructor(name: string, properties: Stream_ResourceProperties, dependsOn?: string[]);
}
export interface Stream_ResourceProperties extends AWSResourceProperties {
    Name?: AWSStringProperty;
    RetentionPeriodHours?: number;
    ShardCount: number;
    StreamEncryption?: Stream_StreamEncryption;
    Tags?: Tag[];
}
export interface Stream_StreamEncryption {
    EncryptionType: AWSStringProperty;
    KeyId: AWSStringProperty;
}
