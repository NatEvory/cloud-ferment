import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TagOptionAssociation extends AWSResource<TagOptionAssociation_ResourceProperties> {
	constructor(name:string,properties:TagOptionAssociation_ResourceProperties){
		super(name,properties,"AWS::ServiceCatalog::TagOptionAssociation");
	}
}

export interface TagOptionAssociation_ResourceProperties extends AWSResourceProperties {
	TagOptionId:AWSStringProperty;
	ResourceId:AWSStringProperty;

}
