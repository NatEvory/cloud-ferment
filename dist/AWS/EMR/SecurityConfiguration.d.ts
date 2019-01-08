import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class SecurityConfiguration extends AWSResource<SecurityConfiguration_ResourceProperties> {
    constructor(name: string, properties: SecurityConfiguration_ResourceProperties, dependsOn?: string[]);
}
export interface SecurityConfiguration_ResourceProperties extends AWSResourceProperties {
    Name?: AWSStringProperty;
    SecurityConfiguration: any;
}
