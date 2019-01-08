import { AWSResource, AWSResourceProperties, AWSStringListProperty } from '../../AWSResource';
export declare class QueuePolicy extends AWSResource<QueuePolicy_ResourceProperties> {
    constructor(name: string, properties: QueuePolicy_ResourceProperties, dependsOn?: string[]);
}
export interface QueuePolicy_ResourceProperties extends AWSResourceProperties {
    PolicyDocument: any;
    Queues: AWSStringListProperty;
}
