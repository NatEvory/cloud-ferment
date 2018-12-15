import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ThingPrincipalAttachment extends AWSResource<ThingPrincipalAttachment_ResourceProperties> {
    constructor(name: string, properties: ThingPrincipalAttachment_ResourceProperties);
}
export interface ThingPrincipalAttachment_ResourceProperties extends AWSResourceProperties {
    Principal: AWSStringProperty;
    ThingName: AWSStringProperty;
}
