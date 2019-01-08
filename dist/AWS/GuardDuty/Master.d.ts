import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Master extends AWSResource<Master_ResourceProperties> {
    constructor(name: string, properties: Master_ResourceProperties, dependsOn?: string[]);
}
export interface Master_ResourceProperties extends AWSResourceProperties {
    DetectorId: AWSStringProperty;
    MasterId: AWSStringProperty;
    InvitationId?: AWSStringProperty;
}
