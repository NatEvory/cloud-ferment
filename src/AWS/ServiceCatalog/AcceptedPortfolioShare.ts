import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AcceptedPortfolioShare extends AWSResource<AcceptedPortfolioShare_ResourceProperties> {
	constructor(name:string,properties:AcceptedPortfolioShare_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::AcceptedPortfolioShare");
	}
}

export interface AcceptedPortfolioShare_ResourceProperties extends AWSResourceProperties {
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;

}
