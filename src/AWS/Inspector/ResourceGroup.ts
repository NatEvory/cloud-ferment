import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ResourceGroup extends AWSResource<ResourceGroup_ResourceProperties> {
	constructor(name:string,properties:ResourceGroup_ResourceProperties){
		super(name,properties,"AWS::Inspector::ResourceGroup");
	}
}

export interface ResourceGroup_ResourceProperties extends AWSResourceProperties {
	ResourceGroupTags:Tag[];

}
