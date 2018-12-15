import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class Template extends AWSResource<Template_ResourceProperties> {
    constructor(name: string, properties: Template_ResourceProperties);
}
export interface Template_ResourceProperties extends AWSResourceProperties {
    Template?: Template_Template;
}
export interface Template_Template {
    HtmlPart?: AWSStringProperty;
    TextPart?: AWSStringProperty;
    TemplateName?: AWSStringProperty;
    SubjectPart?: AWSStringProperty;
}
