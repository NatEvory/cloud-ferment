import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Model extends AWSResource<Model_ResourceProperties> {
	constructor(name:string,properties:Model_ResourceProperties){
		super(name,properties,"AWS::SageMaker::Model");
	}
}

export interface Model_ResourceProperties extends AWSResourceProperties {
	ExecutionRoleArn:AWSStringProperty;
	PrimaryContainer?:Model_ContainerDefinition;
	ModelName?:AWSStringProperty;
	VpcConfig?:Model_VpcConfig;
	Containers?:Model_ContainerDefinition[];
	Tags?:Tag[];

}
export interface Model_VpcConfig {
	Subnets:AWSStringListProperty;
	SecurityGroupIds:AWSStringListProperty;

}
export interface Model_ContainerDefinition {
	ContainerHostname?:AWSStringProperty;
	Environment?:any;
	ModelDataUrl?:AWSStringProperty;
	Image:AWSStringProperty;

}
