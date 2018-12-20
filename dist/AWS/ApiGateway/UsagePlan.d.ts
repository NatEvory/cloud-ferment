import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class UsagePlan extends AWSResource<UsagePlan_ResourceProperties> {
    constructor(name: string, properties: UsagePlan_ResourceProperties);
}
export interface UsagePlan_ResourceProperties extends AWSResourceProperties {
    ApiStages?: UsagePlan_ApiStage[];
    Description?: AWSStringProperty;
    Quota?: UsagePlan_QuotaSettings;
    Throttle?: UsagePlan_ThrottleSettings;
    UsagePlanName?: AWSStringProperty;
}
export interface UsagePlan_ApiStage {
    ApiId?: AWSStringProperty;
    Stage?: AWSStringProperty;
    Throttle?: {
        [key: string]: UsagePlan_ThrottleSettings;
    };
}
export interface UsagePlan_ThrottleSettings {
    BurstLimit?: number;
    RateLimit?: number;
}
export interface UsagePlan_QuotaSettings {
    Limit?: number;
    Offset?: number;
    Period?: AWSStringProperty;
}
