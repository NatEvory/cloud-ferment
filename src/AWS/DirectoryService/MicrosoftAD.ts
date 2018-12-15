import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class MicrosoftAD extends AWSResource<MicrosoftAD_ResourceProperties> {
	constructor(name:string,properties:MicrosoftAD_ResourceProperties){
		super(name,properties,"AWS::DirectoryService::MicrosoftAD");
	}
}

export interface MicrosoftAD_ResourceProperties extends AWSResourceProperties {
	CreateAlias?:boolean;
	Edition?:AWSStringProperty;
	EnableSso?:boolean;
	Name:AWSStringProperty;
	Password:AWSStringProperty;
	ShortName?:AWSStringProperty;
	VpcSettings:MicrosoftAD_VpcSettings;

}
export interface MicrosoftAD_VpcSettings {
	SubnetIds:AWSStringListProperty;
	VpcId:AWSStringProperty;

}
