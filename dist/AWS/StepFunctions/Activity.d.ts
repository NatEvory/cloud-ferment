import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Activity extends AWSResource<Activity_ResourceProperties> {
    constructor(name: string, properties: Activity_ResourceProperties);
}
export interface Activity_ResourceProperties extends AWSResourceProperties {
    Name: AWSStringProperty;
}
