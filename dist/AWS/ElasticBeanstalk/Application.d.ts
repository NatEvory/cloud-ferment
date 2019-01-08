import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Application extends AWSResource<Application_ResourceProperties> {
    constructor(name: string, properties: Application_ResourceProperties, dependsOn?: string[]);
}
export interface Application_ResourceProperties extends AWSResourceProperties {
    ApplicationName?: AWSStringProperty;
    Description?: AWSStringProperty;
    ResourceLifecycleConfig?: Application_ApplicationResourceLifecycleConfig;
}
export interface Application_ApplicationResourceLifecycleConfig {
    ServiceRole?: AWSStringProperty;
    VersionLifecycleConfig?: Application_ApplicationVersionLifecycleConfig;
}
export interface Application_ApplicationVersionLifecycleConfig {
    MaxAgeRule?: Application_MaxAgeRule;
    MaxCountRule?: Application_MaxCountRule;
}
export interface Application_MaxCountRule {
    DeleteSourceFromS3?: boolean;
    Enabled?: boolean;
    MaxCount?: number;
}
export interface Application_MaxAgeRule {
    DeleteSourceFromS3?: boolean;
    Enabled?: boolean;
    MaxAgeInDays?: number;
}
