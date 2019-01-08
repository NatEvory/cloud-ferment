import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TopicPolicy extends AWSResource<TopicPolicy_ResourceProperties> {
	constructor(name:string,properties:TopicPolicy_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SNS::TopicPolicy",dependsOn);
	}
}

export interface TopicPolicy_ResourceProperties extends AWSResourceProperties {
	PolicyDocument:any;
	Topics:AWSStringListProperty;

}
