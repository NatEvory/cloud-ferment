import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Policy extends AWSResource<Policy_ResourceProperties> {
	constructor(name:string,properties:Policy_ResourceProperties){
		super(name,properties,"AWS::IAM::Policy");
	}
}

export interface Policy_ResourceProperties extends AWSResourceProperties {
	Groups?:AWSStringListProperty;
	PolicyDocument:any;
	PolicyName:AWSStringProperty;
	Roles?:AWSStringListProperty;
	Users?:AWSStringListProperty;

}
