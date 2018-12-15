import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class UsagePlanKey extends AWSResource<UsagePlanKey_ResourceProperties> {
    constructor(name: string, properties: UsagePlanKey_ResourceProperties);
}
export interface UsagePlanKey_ResourceProperties extends AWSResourceProperties {
    KeyId: AWSStringProperty;
    KeyType: AWSStringProperty;
    UsagePlanId: AWSStringProperty;
}
