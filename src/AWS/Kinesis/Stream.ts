import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Stream extends AWSResource<Stream_ResourceProperties> {
	constructor(name:string,properties:Stream_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::Kinesis::Stream",dependsOn);
	}
}

export interface Stream_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;
	RetentionPeriodHours?:number;
	ShardCount:number;
	StreamEncryption?:Stream_StreamEncryption;
	Tags?:Tag[];

}
export interface Stream_StreamEncryption {
	EncryptionType:AWSStringProperty;
	KeyId:AWSStringProperty;

}
