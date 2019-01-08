import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TagOptionAssociation extends AWSResource<TagOptionAssociation_ResourceProperties> {
	constructor(name:string,properties:TagOptionAssociation_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::ServiceCatalog::TagOptionAssociation",dependsOn);
	}
}

export interface TagOptionAssociation_ResourceProperties extends AWSResourceProperties {
	TagOptionId:AWSStringProperty;
	ResourceId:AWSStringProperty;

}
