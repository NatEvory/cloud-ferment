import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class User extends AWSResource<User_ResourceProperties> {
    constructor(name: string, properties: User_ResourceProperties, dependsOn?: string[]);
}
export interface User_ResourceProperties extends AWSResourceProperties {
    UserName: AWSStringProperty;
    FirstName?: AWSStringProperty;
    MessageAction?: AWSStringProperty;
    LastName?: AWSStringProperty;
    AuthenticationType: AWSStringProperty;
}
