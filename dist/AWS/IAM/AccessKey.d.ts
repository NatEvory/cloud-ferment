import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class AccessKey extends AWSResource<AccessKey_ResourceProperties> {
    constructor(name: string, properties: AccessKey_ResourceProperties, dependsOn?: string[]);
}
export interface AccessKey_ResourceProperties extends AWSResourceProperties {
    Serial?: number;
    Status?: AWSStringProperty;
    UserName: AWSStringProperty;
}
