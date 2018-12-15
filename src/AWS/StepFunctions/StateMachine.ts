import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class StateMachine extends AWSResource<StateMachine_ResourceProperties> {
	constructor(name:string,properties:StateMachine_ResourceProperties){
		super(name,properties,"AWS::StepFunctions::StateMachine");
	}
}

export interface StateMachine_ResourceProperties extends AWSResourceProperties {
	DefinitionString:AWSStringProperty;
	StateMachineName?:AWSStringProperty;
	RoleArn:AWSStringProperty;

}
