import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class AccessKey extends AWSResource<AccessKey_ResourceProperties> {
	constructor(name:string,properties:AccessKey_ResourceProperties){
		super(name,properties,"AWS::IAM::AccessKey");
	}
}

export interface AccessKey_ResourceProperties extends AWSResourceProperties {
	Serial?:number;
	Status?:AWSStringProperty;
	UserName:AWSStringProperty;

}
