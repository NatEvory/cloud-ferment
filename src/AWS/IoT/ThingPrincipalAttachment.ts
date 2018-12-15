import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ThingPrincipalAttachment extends AWSResource<ThingPrincipalAttachment_ResourceProperties> {
	constructor(name:string,properties:ThingPrincipalAttachment_ResourceProperties){
		super(name,properties,"AWS::IoT::ThingPrincipalAttachment");
	}
}

export interface ThingPrincipalAttachment_ResourceProperties extends AWSResourceProperties {
	Principal:AWSStringProperty;
	ThingName:AWSStringProperty;

}
