import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class LaunchRoleConstraint extends AWSResource<LaunchRoleConstraint_ResourceProperties> {
	constructor(name:string,properties:LaunchRoleConstraint_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::LaunchRoleConstraint");
	}
}

export interface LaunchRoleConstraint_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;
	ProductId:AWSStringProperty;
	RoleArn:AWSStringProperty;

}
