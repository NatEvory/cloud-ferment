import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AccessKey extends AWSResource<AccessKey_ResourceProperties> {
	constructor(name:string,properties:AccessKey_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IAM::AccessKey",dependsOn);
	}
}

export interface AccessKey_ResourceProperties extends AWSResourceProperties {
	Serial?:number;
	Status?:AWSStringProperty;
	UserName:AWSStringProperty;

}
