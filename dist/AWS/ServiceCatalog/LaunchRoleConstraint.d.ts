import { AWSResource, AWSResourceProperties, AWSStringProperty } from '../../AWSResource';
export declare class LaunchRoleConstraint extends AWSResource<LaunchRoleConstraint_ResourceProperties> {
    constructor(name: string, properties: LaunchRoleConstraint_ResourceProperties, dependsOn?: string[]);
}
export interface LaunchRoleConstraint_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
    ProductId: AWSStringProperty;
    RoleArn: AWSStringProperty;
}
