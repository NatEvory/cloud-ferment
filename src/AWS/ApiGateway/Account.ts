import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Account extends AWSResource<Account_ResourceProperties> {
	constructor(name:string,properties:Account_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::Account");
	}
}

export interface Account_ResourceProperties extends AWSResourceProperties {
	CloudWatchRoleArn?:AWSStringProperty;

}
