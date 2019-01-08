import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class WaitCondition extends AWSResource<WaitCondition_ResourceProperties> {
    constructor(name: string, properties: WaitCondition_ResourceProperties, dependsOn?: string[]);
}
export interface WaitCondition_ResourceProperties extends AWSResourceProperties {
    Count?: number;
    Handle?: AWSStringProperty;
    Timeout?: AWSStringProperty;
}
