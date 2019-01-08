import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Alias extends AWSResource<Alias_ResourceProperties> {
    constructor(name: string, properties: Alias_ResourceProperties, dependsOn?: string[]);
}
export interface Alias_ResourceProperties extends AWSResourceProperties {
    AliasName: AWSStringProperty;
    TargetKeyId: AWSStringProperty;
}
