import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Alias extends AWSResource<Alias_ResourceProperties> {
	constructor(name:string,properties:Alias_ResourceProperties){
		super(name,properties,"AWS::KMS::Alias");
	}
}

export interface Alias_ResourceProperties extends AWSResourceProperties {
	AliasName:AWSStringProperty;
	TargetKeyId:AWSStringProperty;

}
