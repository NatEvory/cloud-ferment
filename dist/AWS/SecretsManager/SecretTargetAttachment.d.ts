import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SecretTargetAttachment extends AWSResource<SecretTargetAttachment_ResourceProperties> {
    constructor(name: string, properties: SecretTargetAttachment_ResourceProperties, dependsOn?: string[]);
}
export interface SecretTargetAttachment_ResourceProperties extends AWSResourceProperties {
    SecretId: AWSStringProperty;
    TargetType: AWSStringProperty;
    TargetId: AWSStringProperty;
}
