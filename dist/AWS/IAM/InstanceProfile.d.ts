import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class InstanceProfile extends AWSResource<InstanceProfile_ResourceProperties> {
    constructor(name: string, properties: InstanceProfile_ResourceProperties);
}
export interface InstanceProfile_ResourceProperties extends AWSResourceProperties {
    InstanceProfileName?: AWSStringProperty;
    Path?: AWSStringProperty;
    Roles: AWSStringListProperty;
}
