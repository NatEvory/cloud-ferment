import { AWSResource, AWSResourceProperties, AWSStringListProperty } from '../../AWSResource';
export declare class TopicPolicy extends AWSResource<TopicPolicy_ResourceProperties> {
    constructor(name: string, properties: TopicPolicy_ResourceProperties, dependsOn?: string[]);
}
export interface TopicPolicy_ResourceProperties extends AWSResourceProperties {
    PolicyDocument: any;
    Topics: AWSStringListProperty;
}
