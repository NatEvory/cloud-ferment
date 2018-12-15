import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Function extends AWSResource<Function_ResourceProperties> {
	constructor(name:string,properties:Function_ResourceProperties){
		super(name,properties,"AWS::Lambda::Function");
	}
}

export interface Function_ResourceProperties extends AWSResourceProperties {
	Code:Function_Code;
	DeadLetterConfig?:Function_DeadLetterConfig;
	Description?:AWSStringProperty;
	Environment?:Function_Environment;
	FunctionName?:AWSStringProperty;
	Handler:AWSStringProperty;
	KmsKeyArn?:AWSStringProperty;
	Layers?:AWSStringListProperty;
	MemorySize?:number;
	ReservedConcurrentExecutions?:number;
	Role:AWSStringProperty;
	Runtime:AWSStringProperty;
	Tags?:Tag[];
	Timeout?:number;
	TracingConfig?:Function_TracingConfig;
	VpcConfig?:Function_VpcConfig;

}
export interface Function_VpcConfig {
	SecurityGroupIds:AWSStringListProperty;
	SubnetIds:AWSStringListProperty;

}
export interface Function_DeadLetterConfig {
	TargetArn?:AWSStringProperty;

}
export interface Function_TracingConfig {
	Mode?:AWSStringProperty;

}
export interface Function_Code {
	S3Bucket?:AWSStringProperty;
	S3Key?:AWSStringProperty;
	S3ObjectVersion?:AWSStringProperty;
	ZipFile?:AWSStringProperty;

}
export interface Function_Environment {
	Variables?:Map<string,AWSStringProperty>;

}
