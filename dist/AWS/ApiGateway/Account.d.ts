import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Account extends AWSResource<Account_ResourceProperties> {
    constructor(name: string, properties: Account_ResourceProperties, dependsOn?: string[]);
}
export interface Account_ResourceProperties extends AWSResourceProperties {
    CloudWatchRoleArn?: AWSStringProperty;
}
