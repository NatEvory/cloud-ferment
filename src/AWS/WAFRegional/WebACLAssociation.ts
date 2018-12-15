import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class WebACLAssociation extends AWSResource<WebACLAssociation_ResourceProperties> {
	constructor(name:string,properties:WebACLAssociation_ResourceProperties){
		super(name,properties,"AWS::WAFRegional::WebACLAssociation");
	}
}

export interface WebACLAssociation_ResourceProperties extends AWSResourceProperties {
	ResourceArn:AWSStringProperty;
	WebACLId:AWSStringProperty;

}
