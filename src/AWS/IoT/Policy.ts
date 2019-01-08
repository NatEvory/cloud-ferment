import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Policy extends AWSResource<Policy_ResourceProperties> {
	constructor(name:string,properties:Policy_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::IoT::Policy",dependsOn);
	}
}

export interface Policy_ResourceProperties extends AWSResourceProperties {
	PolicyDocument:any;
	PolicyName?:AWSStringProperty;

}
