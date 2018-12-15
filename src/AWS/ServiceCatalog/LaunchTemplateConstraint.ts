import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LaunchTemplateConstraint extends AWSResource<LaunchTemplateConstraint_ResourceProperties> {
	constructor(name:string,properties:LaunchTemplateConstraint_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::LaunchTemplateConstraint");
	}
}

export interface LaunchTemplateConstraint_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;
	ProductId:AWSStringProperty;
	Rules:AWSStringProperty;

}
