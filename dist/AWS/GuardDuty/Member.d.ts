import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Member extends AWSResource<Member_ResourceProperties> {
    constructor(name: string, properties: Member_ResourceProperties);
}
export interface Member_ResourceProperties extends AWSResourceProperties {
    Status?: AWSStringProperty;
    MemberId: AWSStringProperty;
    Email: AWSStringProperty;
    Message?: AWSStringProperty;
    DisableEmailNotification?: boolean;
    DetectorId: AWSStringProperty;
}
