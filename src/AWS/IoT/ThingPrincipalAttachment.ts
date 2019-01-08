import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ThingPrincipalAttachment extends AWSResource<ThingPrincipalAttachment_ResourceProperties> {
	constructor(name:string,properties:ThingPrincipalAttachment_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT::ThingPrincipalAttachment",dependsOn);
	}
}

export interface ThingPrincipalAttachment_ResourceProperties extends AWSResourceProperties {
	Principal:AWSStringProperty;
	ThingName:AWSStringProperty;

}
