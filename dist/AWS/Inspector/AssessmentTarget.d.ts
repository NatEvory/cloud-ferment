import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class AssessmentTarget extends AWSResource<AssessmentTarget_ResourceProperties> {
    constructor(name: string, properties: AssessmentTarget_ResourceProperties, dependsOn?: string[]);
}
export interface AssessmentTarget_ResourceProperties extends AWSResourceProperties {
    AssessmentTargetName?: AWSStringProperty;
    ResourceGroupArn: AWSStringProperty;
}
