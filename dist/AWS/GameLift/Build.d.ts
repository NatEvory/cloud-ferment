import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Build extends AWSResource<Build_ResourceProperties> {
    constructor(name: string, properties: Build_ResourceProperties, dependsOn?: string[]);
}
export interface Build_ResourceProperties extends AWSResourceProperties {
    Name?: AWSStringProperty;
    StorageLocation?: Build_S3Location;
    Version?: AWSStringProperty;
}
export interface Build_S3Location {
    Bucket: AWSStringProperty;
    Key: AWSStringProperty;
    RoleArn: AWSStringProperty;
}
