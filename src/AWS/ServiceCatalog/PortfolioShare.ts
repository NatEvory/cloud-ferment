import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class PortfolioShare extends AWSResource<PortfolioShare_ResourceProperties> {
	constructor(name:string,properties:PortfolioShare_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceCatalog::PortfolioShare",dependsOn);
	}
}

export interface PortfolioShare_ResourceProperties extends AWSResourceProperties {
	AccountId:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	PortfolioId:AWSStringProperty;

}
