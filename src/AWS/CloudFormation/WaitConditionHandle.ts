import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class WaitConditionHandle extends AWSResource<WaitConditionHandle_ResourceProperties> {
	constructor(name:string,properties:WaitConditionHandle_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::CloudFormation::WaitConditionHandle",dependsOn);
	}
}

export interface WaitConditionHandle_ResourceProperties extends AWSResourceProperties {

}
