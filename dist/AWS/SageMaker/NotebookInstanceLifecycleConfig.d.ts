import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class NotebookInstanceLifecycleConfig extends AWSResource<NotebookInstanceLifecycleConfig_ResourceProperties> {
    constructor(name: string, properties: NotebookInstanceLifecycleConfig_ResourceProperties, dependsOn?: string[]);
}
export interface NotebookInstanceLifecycleConfig_ResourceProperties extends AWSResourceProperties {
    OnStart?: NotebookInstanceLifecycleConfig_NotebookInstanceLifecycleHook[];
    NotebookInstanceLifecycleConfigName?: AWSStringProperty;
    OnCreate?: NotebookInstanceLifecycleConfig_NotebookInstanceLifecycleHook[];
}
export interface NotebookInstanceLifecycleConfig_NotebookInstanceLifecycleHook {
    Content?: AWSStringProperty;
}
