import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PortfolioPrincipalAssociation extends AWSResource<PortfolioPrincipalAssociation_ResourceProperties> {
	constructor(name:string,properties:PortfolioPrincipalAssociation_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::PortfolioPrincipalAssociation");
	}
}

export interface PortfolioPrincipalAssociation_ResourceProperties extends AWSResourceProperties {
	PrincipalARN:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;
	PrincipalType:AWSStringProperty;

}
