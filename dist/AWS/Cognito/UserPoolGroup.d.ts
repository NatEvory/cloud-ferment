import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class UserPoolGroup extends AWSResource<UserPoolGroup_ResourceProperties> {
    constructor(name: string, properties: UserPoolGroup_ResourceProperties, dependsOn?: string[]);
}
export interface UserPoolGroup_ResourceProperties extends AWSResourceProperties {
    GroupName?: AWSStringProperty;
    Description?: AWSStringProperty;
    UserPoolId: AWSStringProperty;
    Precedence?: number;
    RoleArn?: AWSStringProperty;
}
