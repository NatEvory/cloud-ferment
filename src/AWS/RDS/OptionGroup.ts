import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class OptionGroup extends AWSResource<OptionGroup_ResourceProperties> {
	constructor(name:string,properties:OptionGroup_ResourceProperties){
		super(name,properties,"AWS::RDS::OptionGroup");
	}
}

export interface OptionGroup_ResourceProperties extends AWSResourceProperties {
	EngineName:AWSStringProperty;
	MajorEngineVersion:AWSStringProperty;
	OptionConfigurations:OptionGroup_OptionConfiguration[];
	OptionGroupDescription:AWSStringProperty;
	Tags?:Tag[];

}
export interface OptionGroup_OptionSetting {
	Name?:AWSStringProperty;
	Value?:AWSStringProperty;

}
export interface OptionGroup_OptionConfiguration {
	DBSecurityGroupMemberships?:AWSStringListProperty;
	OptionName:AWSStringProperty;
	OptionSettings?:OptionGroup_OptionSetting[];
	OptionVersion?:AWSStringProperty;
	Port?:number;
	VpcSecurityGroupMemberships?:AWSStringListProperty;

}
