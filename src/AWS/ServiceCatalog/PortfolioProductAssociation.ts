import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PortfolioProductAssociation extends AWSResource<PortfolioProductAssociation_ResourceProperties> {
	constructor(name:string,properties:PortfolioProductAssociation_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::PortfolioProductAssociation");
	}
}

export interface PortfolioProductAssociation_ResourceProperties extends AWSResourceProperties {
	SourcePortfolioId?:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;
	ProductId:AWSStringProperty;

}
