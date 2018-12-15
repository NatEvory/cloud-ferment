import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class UsagePlanKey extends AWSResource<UsagePlanKey_ResourceProperties> {
	constructor(name:string,properties:UsagePlanKey_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::UsagePlanKey");
	}
}

export interface UsagePlanKey_ResourceProperties extends AWSResourceProperties {
	KeyId:AWSStringProperty;
	KeyType:AWSStringProperty;
	UsagePlanId:AWSStringProperty;

}
