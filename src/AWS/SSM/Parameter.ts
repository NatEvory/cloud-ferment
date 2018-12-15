import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class Parameter extends AWSResource<Parameter_ResourceProperties> {
	constructor(name:string,properties:Parameter_ResourceProperties){
		super(name,properties,"AWS::SSM::Parameter");
	}
}

export interface Parameter_ResourceProperties extends AWSResourceProperties {
	Type:AWSStringProperty;
	Description?:AWSStringProperty;
	AllowedPattern?:AWSStringProperty;
	Value:AWSStringProperty;
	Name?:AWSStringProperty;

}
