import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class User extends AWSResource<User_ResourceProperties> {
    constructor(name: string, properties: User_ResourceProperties);
}
export interface User_ResourceProperties extends AWSResourceProperties {
    Groups?: AWSStringListProperty;
    LoginProfile?: User_LoginProfile;
    ManagedPolicyArns?: AWSStringListProperty;
    Path?: AWSStringProperty;
    PermissionsBoundary?: AWSStringProperty;
    Policies?: User_Policy[];
    UserName?: AWSStringProperty;
}
export interface User_LoginProfile {
    Password: AWSStringProperty;
    PasswordResetRequired?: boolean;
}
export interface User_Policy {
    PolicyDocument: any;
    PolicyName: AWSStringProperty;
}
