import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class LogStream extends AWSResource<LogStream_ResourceProperties> {
    constructor(name: string, properties: LogStream_ResourceProperties);
}
export interface LogStream_ResourceProperties extends AWSResourceProperties {
    LogGroupName: AWSStringProperty;
    LogStreamName?: AWSStringProperty;
}
