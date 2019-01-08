import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Portfolio extends AWSResource<Portfolio_ResourceProperties> {
	constructor(name:string,properties:Portfolio_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceCatalog::Portfolio",dependsOn);
	}
}

export interface Portfolio_ResourceProperties extends AWSResourceProperties {
	ProviderName:AWSStringProperty;
	Description?:AWSStringProperty;
	DisplayName:AWSStringProperty;
	AcceptLanguage?:AWSStringProperty;
	Tags?:Tag[];

}
