import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SecurityGroup extends AWSResource<SecurityGroup_ResourceProperties> {
    constructor(name: string, properties: SecurityGroup_ResourceProperties, dependsOn?: string[]);
}
export interface SecurityGroup_ResourceProperties extends AWSResourceProperties {
    Description: AWSStringProperty;
}
