import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class UserPoolUserToGroupAttachment extends AWSResource<UserPoolUserToGroupAttachment_ResourceProperties> {
    constructor(name: string, properties: UserPoolUserToGroupAttachment_ResourceProperties);
}
export interface UserPoolUserToGroupAttachment_ResourceProperties extends AWSResourceProperties {
    GroupName: AWSStringProperty;
    UserPoolId: AWSStringProperty;
    Username: AWSStringProperty;
}
