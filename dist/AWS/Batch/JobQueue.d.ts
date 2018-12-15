import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class JobQueue extends AWSResource<JobQueue_ResourceProperties> {
    constructor(name: string, properties: JobQueue_ResourceProperties);
}
export interface JobQueue_ResourceProperties extends AWSResourceProperties {
    ComputeEnvironmentOrder: JobQueue_ComputeEnvironmentOrder[];
    Priority: number;
    State?: AWSStringProperty;
    JobQueueName?: AWSStringProperty;
}
export interface JobQueue_ComputeEnvironmentOrder {
    ComputeEnvironment: AWSStringProperty;
    Order: number;
}
