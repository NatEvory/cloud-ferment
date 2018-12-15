import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class ApiKey extends AWSResource<ApiKey_ResourceProperties> {
    constructor(name: string, properties: ApiKey_ResourceProperties);
}
export interface ApiKey_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    Expires?: number;
    ApiId: AWSStringProperty;
}
