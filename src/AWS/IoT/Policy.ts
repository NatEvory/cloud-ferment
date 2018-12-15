import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Policy extends AWSResource<Policy_ResourceProperties> {
	constructor(name:string,properties:Policy_ResourceProperties){
		super(name,properties,"AWS::IoT::Policy");
	}
}

export interface Policy_ResourceProperties extends AWSResourceProperties {
	PolicyDocument:any;
	PolicyName?:AWSStringProperty;

}
