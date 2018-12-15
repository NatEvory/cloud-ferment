import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class StackUserAssociation extends AWSResource<StackUserAssociation_ResourceProperties> {
    constructor(name: string, properties: StackUserAssociation_ResourceProperties);
}
export interface StackUserAssociation_ResourceProperties extends AWSResourceProperties {
    SendEmailNotification?: boolean;
    UserName: AWSStringProperty;
    StackName: AWSStringProperty;
    AuthenticationType: AWSStringProperty;
}
