import { AWSResource, AWSResourceProperties } from '../../AWSResource';
export declare class WaitConditionHandle extends AWSResource<WaitConditionHandle_ResourceProperties> {
    constructor(name: string, properties: WaitConditionHandle_ResourceProperties, dependsOn?: string[]);
}
export interface WaitConditionHandle_ResourceProperties extends AWSResourceProperties {
}
