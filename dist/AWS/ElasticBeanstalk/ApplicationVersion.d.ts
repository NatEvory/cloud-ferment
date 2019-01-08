import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ApplicationVersion extends AWSResource<ApplicationVersion_ResourceProperties> {
    constructor(name: string, properties: ApplicationVersion_ResourceProperties, dependsOn?: string[]);
}
export interface ApplicationVersion_ResourceProperties extends AWSResourceProperties {
    ApplicationName: AWSStringProperty;
    Description?: AWSStringProperty;
    SourceBundle: ApplicationVersion_SourceBundle;
}
export interface ApplicationVersion_SourceBundle {
    S3Bucket: AWSStringProperty;
    S3Key: AWSStringProperty;
}
