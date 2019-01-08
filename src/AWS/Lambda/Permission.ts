import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Permission extends AWSResource<Permission_ResourceProperties> {
	constructor(name:string,properties:Permission_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Lambda::Permission",dependsOn);
	}
}

export interface Permission_ResourceProperties extends AWSResourceProperties {
	Action:AWSStringProperty;
	EventSourceToken?:AWSStringProperty;
	FunctionName:AWSStringProperty;
	Principal:AWSStringProperty;
	SourceAccount?:AWSStringProperty;
	SourceArn?:AWSStringProperty;

}
