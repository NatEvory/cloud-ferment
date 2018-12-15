import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class DevEndpoint extends AWSResource<DevEndpoint_ResourceProperties> {
	constructor(name:string,properties:DevEndpoint_ResourceProperties){
		super(name,properties,"AWS::Glue::DevEndpoint");
	}
}

export interface DevEndpoint_ResourceProperties extends AWSResourceProperties {
	ExtraJarsS3Path?:AWSStringProperty;
	EndpointName?:AWSStringProperty;
	PublicKey:AWSStringProperty;
	NumberOfNodes?:number;
	SubnetId?:AWSStringProperty;
	ExtraPythonLibsS3Path?:AWSStringProperty;
	SecurityGroupIds?:AWSStringListProperty;
	RoleArn:AWSStringProperty;

}
