import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class UserToGroupAddition extends AWSResource<UserToGroupAddition_ResourceProperties> {
    constructor(name: string, properties: UserToGroupAddition_ResourceProperties, dependsOn?: string[]);
}
export interface UserToGroupAddition_ResourceProperties extends AWSResourceProperties {
    GroupName: AWSStringProperty;
    Users: AWSStringListProperty;
}
