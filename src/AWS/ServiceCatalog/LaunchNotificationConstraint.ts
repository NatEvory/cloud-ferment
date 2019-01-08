import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LaunchNotificationConstraint extends AWSResource<LaunchNotificationConstraint_ResourceProperties> {
	constructor(name:string,properties:LaunchNotificationConstraint_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceCatalog::LaunchNotificationConstraint",dependsOn);
	}
}

export interface LaunchNotificationConstraint_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	NotificationArns:AWSStringListProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;
	ProductId:AWSStringProperty;

}
