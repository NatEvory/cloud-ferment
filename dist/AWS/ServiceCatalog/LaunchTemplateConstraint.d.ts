import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class LaunchTemplateConstraint extends AWSResource<LaunchTemplateConstraint_ResourceProperties> {
    constructor(name: string, properties: LaunchTemplateConstraint_ResourceProperties, dependsOn?: string[]);
}
export interface LaunchTemplateConstraint_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
    ProductId: AWSStringProperty;
    Rules: AWSStringProperty;
}
