import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class IPSet extends AWSResource<IPSet_ResourceProperties> {
	constructor(name:string,properties:IPSet_ResourceProperties){
		super(name,properties,"AWS::WAFRegional::IPSet");
	}
}

export interface IPSet_ResourceProperties extends AWSResourceProperties {
	IPSetDescriptors?:IPSet_IPSetDescriptor[];
	Name:AWSStringProperty;

}
export interface IPSet_IPSetDescriptor {
	Type:AWSStringProperty;
	Value:AWSStringProperty;

}
