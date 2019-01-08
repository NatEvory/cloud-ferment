import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class UserPoolClient extends AWSResource<UserPoolClient_ResourceProperties> {
    constructor(name: string, properties: UserPoolClient_ResourceProperties, dependsOn?: string[]);
}
export interface UserPoolClient_ResourceProperties extends AWSResourceProperties {
    GenerateSecret?: boolean;
    ClientName?: AWSStringProperty;
    UserPoolId: AWSStringProperty;
    ExplicitAuthFlows?: AWSStringListProperty;
    RefreshTokenValidity?: number;
    ReadAttributes?: AWSStringListProperty;
    WriteAttributes?: AWSStringListProperty;
}
