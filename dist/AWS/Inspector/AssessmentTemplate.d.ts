import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class AssessmentTemplate extends AWSResource<AssessmentTemplate_ResourceProperties> {
    constructor(name: string, properties: AssessmentTemplate_ResourceProperties, dependsOn?: string[]);
}
export interface AssessmentTemplate_ResourceProperties extends AWSResourceProperties {
    AssessmentTargetArn: AWSStringProperty;
    DurationInSeconds: number;
    AssessmentTemplateName?: AWSStringProperty;
    RulesPackageArns: AWSStringListProperty;
    UserAttributesForFindings?: Tag[];
}
