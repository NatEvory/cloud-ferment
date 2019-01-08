import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NotebookInstance extends AWSResource<NotebookInstance_ResourceProperties> {
	constructor(name:string,properties:NotebookInstance_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SageMaker::NotebookInstance",dependsOn);
	}
}

export interface NotebookInstance_ResourceProperties extends AWSResourceProperties {
	KmsKeyId?:AWSStringProperty;
	VolumeSizeInGB?:number;
	DirectInternetAccess?:AWSStringProperty;
	SubnetId?:AWSStringProperty;
	NotebookInstanceName?:AWSStringProperty;
	InstanceType:AWSStringProperty;
	LifecycleConfigName?:AWSStringProperty;
	SecurityGroupIds?:AWSStringListProperty;
	RoleArn:AWSStringProperty;
	Tags?:Tag[];

}
