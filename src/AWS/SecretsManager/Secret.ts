import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Secret extends AWSResource<Secret_ResourceProperties> {
	constructor(name:string,properties:Secret_ResourceProperties){
		super(name,properties,"AWS::SecretsManager::Secret");
	}
}

export interface Secret_ResourceProperties extends AWSResourceProperties {
	Description?:AWSStringProperty;
	KmsKeyId?:AWSStringProperty;
	SecretString?:AWSStringProperty;
	GenerateSecretString?:Secret_GenerateSecretString;
	Tags?:Tag[];
	Name?:AWSStringProperty;

}
export interface Secret_GenerateSecretString {
	ExcludeUppercase?:boolean;
	RequireEachIncludedType?:boolean;
	IncludeSpace?:boolean;
	ExcludeCharacters?:AWSStringProperty;
	GenerateStringKey?:AWSStringProperty;
	PasswordLength?:number;
	ExcludePunctuation?:boolean;
	ExcludeLowercase?:boolean;
	SecretStringTemplate?:AWSStringProperty;
	ExcludeNumbers?:boolean;

}
