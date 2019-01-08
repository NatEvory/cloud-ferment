import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class BucketPolicy extends AWSResource<BucketPolicy_ResourceProperties> {
    constructor(name: string, properties: BucketPolicy_ResourceProperties, dependsOn?: string[]);
}
export interface BucketPolicy_ResourceProperties extends AWSResourceProperties {
    Bucket: AWSStringProperty;
    PolicyDocument: any;
}
