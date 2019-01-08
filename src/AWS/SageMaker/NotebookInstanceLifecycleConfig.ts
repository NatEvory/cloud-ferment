import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NotebookInstanceLifecycleConfig extends AWSResource<NotebookInstanceLifecycleConfig_ResourceProperties> {
	constructor(name:string,properties:NotebookInstanceLifecycleConfig_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SageMaker::NotebookInstanceLifecycleConfig",dependsOn);
	}
}

export interface NotebookInstanceLifecycleConfig_ResourceProperties extends AWSResourceProperties {
	OnStart?:NotebookInstanceLifecycleConfig_NotebookInstanceLifecycleHook[];
	NotebookInstanceLifecycleConfigName?:AWSStringProperty;
	OnCreate?:NotebookInstanceLifecycleConfig_NotebookInstanceLifecycleHook[];

}
export interface NotebookInstanceLifecycleConfig_NotebookInstanceLifecycleHook {
	Content?:AWSStringProperty;

}
