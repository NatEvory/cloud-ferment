import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class LogGroup extends AWSResource<LogGroup_ResourceProperties> {
    constructor(name: string, properties: LogGroup_ResourceProperties, dependsOn?: string[]);
}
export interface LogGroup_ResourceProperties extends AWSResourceProperties {
    LogGroupName?: AWSStringProperty;
    RetentionInDays?: number;
}
