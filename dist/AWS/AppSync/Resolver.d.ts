import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class Resolver extends AWSResource<Resolver_ResourceProperties> {
    constructor(name: string, properties: Resolver_ResourceProperties);
}
export interface Resolver_ResourceProperties extends AWSResourceProperties {
    ResponseMappingTemplateS3Location?: AWSStringProperty;
    TypeName: AWSStringProperty;
    PipelineConfig?: Resolver_PipelineConfig;
    DataSourceName?: AWSStringProperty;
    RequestMappingTemplate?: AWSStringProperty;
    ResponseMappingTemplate?: AWSStringProperty;
    Kind?: AWSStringProperty;
    RequestMappingTemplateS3Location?: AWSStringProperty;
    ApiId: AWSStringProperty;
    FieldName: AWSStringProperty;
}
export interface Resolver_PipelineConfig {
    Functions?: AWSStringListProperty;
}
