import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Permission extends AWSResource<Permission_ResourceProperties> {
    constructor(name: string, properties: Permission_ResourceProperties, dependsOn?: string[]);
}
export interface Permission_ResourceProperties extends AWSResourceProperties {
    Action: AWSStringProperty;
    EventSourceToken?: AWSStringProperty;
    FunctionName: AWSStringProperty;
    Principal: AWSStringProperty;
    SourceAccount?: AWSStringProperty;
    SourceArn?: AWSStringProperty;
}
