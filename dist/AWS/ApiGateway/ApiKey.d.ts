import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ApiKey extends AWSResource<ApiKey_ResourceProperties> {
    constructor(name: string, properties: ApiKey_ResourceProperties, dependsOn?: string[]);
}
export interface ApiKey_ResourceProperties extends AWSResourceProperties {
    CustomerId?: AWSStringProperty;
    Description?: AWSStringProperty;
    Enabled?: boolean;
    GenerateDistinctId?: boolean;
    Name?: AWSStringProperty;
    StageKeys?: ApiKey_StageKey[];
    Value?: AWSStringProperty;
}
export interface ApiKey_StageKey {
    RestApiId?: AWSStringProperty;
    StageName?: AWSStringProperty;
}
