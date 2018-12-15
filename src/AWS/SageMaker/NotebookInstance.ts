import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class NotebookInstance extends AWSResource<NotebookInstance_ResourceProperties> {
	constructor(name:string,properties:NotebookInstance_ResourceProperties){
		super(name,properties,"AWS::SageMaker::NotebookInstance");
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
