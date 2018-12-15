import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TagOption extends AWSResource<TagOption_ResourceProperties> {
	constructor(name:string,properties:TagOption_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::TagOption");
	}
}

export interface TagOption_ResourceProperties extends AWSResourceProperties {
	Active?:boolean;
	Value:AWSStringProperty;
	Key:AWSStringProperty;

}
