import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class UserProfile extends AWSResource<UserProfile_ResourceProperties> {
    constructor(name: string, properties: UserProfile_ResourceProperties);
}
export interface UserProfile_ResourceProperties extends AWSResourceProperties {
    AllowSelfManagement?: boolean;
    IamUserArn: AWSStringProperty;
    SshPublicKey?: AWSStringProperty;
    SshUsername?: AWSStringProperty;
}
