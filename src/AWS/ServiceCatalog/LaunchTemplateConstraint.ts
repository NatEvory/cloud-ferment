import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LaunchTemplateConstraint extends AWSResource<LaunchTemplateConstraint_ResourceProperties> {
	constructor(name:string,properties:LaunchTemplateConstraint_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceCatalog::LaunchTemplateConstraint",dependsOn);
	}
}

export interface LaunchTemplateConstraint_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;
	ProductId:AWSStringProperty;
	Rules:AWSStringProperty;

}
