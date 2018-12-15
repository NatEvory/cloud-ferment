import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class EndpointConfig extends AWSResource<EndpointConfig_ResourceProperties> {
	constructor(name:string,properties:EndpointConfig_ResourceProperties){
		super(name,properties,"AWS::SageMaker::EndpointConfig");
	}
}

export interface EndpointConfig_ResourceProperties extends AWSResourceProperties {
	ProductionVariants:EndpointConfig_ProductionVariant[];
	KmsKeyId?:AWSStringProperty;
	EndpointConfigName?:AWSStringProperty;
	Tags?:Tag[];

}
export interface EndpointConfig_ProductionVariant {
	ModelName:AWSStringProperty;
	VariantName:AWSStringProperty;
	InitialInstanceCount:number;
	InstanceType:AWSStringProperty;
	AcceleratorType?:AWSStringProperty;
	InitialVariantWeight:number;

}
