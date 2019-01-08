import { AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
export declare class LaunchNotificationConstraint extends AWSResource<LaunchNotificationConstraint_ResourceProperties> {
    constructor(name: string, properties: LaunchNotificationConstraint_ResourceProperties, dependsOn?: string[]);
}
export interface LaunchNotificationConstraint_ResourceProperties extends AWSResourceProperties {
    Description?: AWSStringProperty;
    NotificationArns: AWSStringListProperty;
    AcceptLanguage?: AWSStringProperty;
    PortfolioId: AWSStringProperty;
    ProductId: AWSStringProperty;
}
