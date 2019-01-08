import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Detector extends AWSResource<Detector_ResourceProperties> {
    constructor(name: string, properties: Detector_ResourceProperties, dependsOn?: string[]);
}
export interface Detector_ResourceProperties extends AWSResourceProperties {
    FindingPublishingFrequency?: AWSStringProperty;
    Enable: boolean;
}
