import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class LayerVersion extends AWSResource<LayerVersion_ResourceProperties> {
    constructor(name: string, properties: LayerVersion_ResourceProperties, dependsOn?: string[]);
}
export interface LayerVersion_ResourceProperties extends AWSResourceProperties {
    CompatibleRuntimes?: AWSStringListProperty;
    LicenseInfo?: AWSStringProperty;
    Description?: AWSStringProperty;
    LayerName?: AWSStringProperty;
    Content: LayerVersion_Content;
}
export interface LayerVersion_Content {
    S3ObjectVersion?: AWSStringProperty;
    S3Bucket: AWSStringProperty;
    S3Key: AWSStringProperty;
}
