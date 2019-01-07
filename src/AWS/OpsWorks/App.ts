import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class App extends AWSResource<App_ResourceProperties> {
	constructor(name:string,properties:App_ResourceProperties){
		super(name,properties,"AWS::OpsWorks::App");
	}
}

export interface App_ResourceProperties extends AWSResourceProperties {
	AppSource?:App_Source;
	Attributes?:{[key:string]:AWSStringProperty};
	DataSources?:App_DataSource[];
	Description?:AWSStringProperty;
	Domains?:AWSStringListProperty;
	EnableSsl?:boolean;
	Environment?:App_EnvironmentVariable[];
	Name:AWSStringProperty;
	Shortname?:AWSStringProperty;
	SslConfiguration?:App_SslConfiguration;
	StackId:AWSStringProperty;
	Type:AWSStringProperty;

}
export interface App_DataSource {
	Arn?:AWSStringProperty;
	DatabaseName?:AWSStringProperty;
	Type?:AWSStringProperty;

}
export interface App_EnvironmentVariable {
	Key:AWSStringProperty;
	Secure?:boolean;
	Value:AWSStringProperty;

}
export interface App_SslConfiguration {
	Certificate?:AWSStringProperty;
	Chain?:AWSStringProperty;
	PrivateKey?:AWSStringProperty;

}
export interface App_Source {
	Password?:AWSStringProperty;
	Revision?:AWSStringProperty;
	SshKey?:AWSStringProperty;
	Type?:AWSStringProperty;
	Url?:AWSStringProperty;
	Username?:AWSStringProperty;

}
