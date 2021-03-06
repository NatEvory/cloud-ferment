import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Thing extends AWSResource<Thing_ResourceProperties> {
    constructor(name: string, properties: Thing_ResourceProperties, dependsOn?: string[]);
}
export interface Thing_ResourceProperties extends AWSResourceProperties {
    AttributePayload?: Thing_AttributePayload;
    ThingName?: AWSStringProperty;
}
export interface Thing_AttributePayload {
    Attributes?: {
        [key: string]: AWSStringProperty;
    };
}
