import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Application extends AWSResource<Application_ResourceProperties> {
    constructor(name: string, properties: Application_ResourceProperties);
}
export interface Application_ResourceProperties extends AWSResourceProperties {
    ApplicationName?: AWSStringProperty;
    ComputePlatform?: AWSStringProperty;
}
