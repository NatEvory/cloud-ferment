import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class RestApi extends AWSResource<RestApi_ResourceProperties> {
	constructor(name:string,properties:RestApi_ResourceProperties){
		super(name,properties,"AWS::ApiGateway::RestApi");
	}
}

export interface RestApi_ResourceProperties extends AWSResourceProperties {
	ApiKeySourceType?:AWSStringProperty;
	BinaryMediaTypes?:AWSStringListProperty;
	Body?:any;
	BodyS3Location?:RestApi_S3Location;
	CloneFrom?:AWSStringProperty;
	Description?:AWSStringProperty;
	EndpointConfiguration?:RestApi_EndpointConfiguration;
	FailOnWarnings?:boolean;
	MinimumCompressionSize?:number;
	Name?:AWSStringProperty;
	Parameters?:Map<string,AWSStringProperty>;
	Policy?:any;

}
export interface RestApi_S3Location {
	Bucket?:AWSStringProperty;
	ETag?:AWSStringProperty;
	Key?:AWSStringProperty;
	Version?:AWSStringProperty;

}
export interface RestApi_EndpointConfiguration {
	Types?:AWSStringListProperty;

}
