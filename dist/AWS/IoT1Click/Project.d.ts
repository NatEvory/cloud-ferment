import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Project extends AWSResource<Project_ResourceProperties> {
    constructor(name: string, properties: Project_ResourceProperties);
}
export interface Project_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    PlacementTemplate: Project_PlacementTemplate;
    ProjectName?: AWSStringProperty;
}
export interface Project_DeviceTemplate {
    DeviceType?: AWSStringProperty;
    CallbackOverrides?: any;
}
export interface Project_PlacementTemplate {
    DeviceTemplates?: any;
    DefaultAttributes?: any;
}
