import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Stack extends AWSResource<Stack_ResourceProperties> {
    constructor(name: string, properties: Stack_ResourceProperties, dependsOn?: string[]);
}
export interface Stack_ResourceProperties extends AWSResourceProperties {
    NotificationARNs?: AWSStringListProperty;
    Parameters?: {
        [key: string]: AWSStringProperty;
    };
    Tags?: Tag[];
    TemplateURL: AWSStringProperty;
    TimeoutInMinutes?: number;
}
