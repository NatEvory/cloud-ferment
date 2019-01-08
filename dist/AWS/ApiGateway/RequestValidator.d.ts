import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class RequestValidator extends AWSResource<RequestValidator_ResourceProperties> {
    constructor(name: string, properties: RequestValidator_ResourceProperties, dependsOn?: string[]);
}
export interface RequestValidator_ResourceProperties extends AWSResourceProperties {
    Name?: AWSStringProperty;
    RestApiId: AWSStringProperty;
    ValidateRequestBody?: boolean;
    ValidateRequestParameters?: boolean;
}
