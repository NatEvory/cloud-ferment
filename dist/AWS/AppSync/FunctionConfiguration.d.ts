import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class FunctionConfiguration extends AWSResource<FunctionConfiguration_ResourceProperties> {
    constructor(name: string, properties: FunctionConfiguration_ResourceProperties);
}
export interface FunctionConfiguration_ResourceProperties extends AWSResourceProperties {
    ResponseMappingTemplateS3Location?: AWSStringProperty;
    Description?: AWSStringProperty;
    DataSourceName?: AWSStringProperty;
    RequestMappingTemplate?: AWSStringProperty;
    ResponseMappingTemplate?: AWSStringProperty;
    FunctionVersion?: AWSStringProperty;
    RequestMappingTemplateS3Location?: AWSStringProperty;
    ApiId: AWSStringProperty;
    Name?: AWSStringProperty;
}
