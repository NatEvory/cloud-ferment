import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Trigger extends AWSResource<Trigger_ResourceProperties> {
	constructor(name:string,properties:Trigger_ResourceProperties){
		super(name,properties,"AWS::Glue::Trigger");
	}
}

export interface Trigger_ResourceProperties extends AWSResourceProperties {
	Type:AWSStringProperty;
	Description?:AWSStringProperty;
	Actions:Trigger_Action[];
	Schedule?:AWSStringProperty;
	Name?:AWSStringProperty;
	Predicate?:Trigger_Predicate;

}
export interface Trigger_Action {
	JobName?:AWSStringProperty;
	Arguments?:any;

}
export interface Trigger_Condition {
	State?:AWSStringProperty;
	LogicalOperator?:AWSStringProperty;
	JobName?:AWSStringProperty;

}
export interface Trigger_Predicate {
	Logical?:AWSStringProperty;
	Conditions?:Trigger_Condition[];

}
