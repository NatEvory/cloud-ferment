import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class SecurityConfiguration extends AWSResource<SecurityConfiguration_ResourceProperties> {
	constructor(name:string,properties:SecurityConfiguration_ResourceProperties){
		super(name,properties,"AWS::EMR::SecurityConfiguration");
	}
}

export interface SecurityConfiguration_ResourceProperties extends AWSResourceProperties {
	Name?:AWSStringProperty;
	SecurityConfiguration:any;

}
