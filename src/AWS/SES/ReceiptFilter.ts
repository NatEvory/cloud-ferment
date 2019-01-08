import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class ReceiptFilter extends AWSResource<ReceiptFilter_ResourceProperties> {
	constructor(name:string,properties:ReceiptFilter_ResourceProperties,dependsOn?:string[]){
		super(name,properties,"AWS::SES::ReceiptFilter",dependsOn);
	}
}

export interface ReceiptFilter_ResourceProperties extends AWSResourceProperties {
	Filter:ReceiptFilter_Filter;

}
export interface ReceiptFilter_Filter {
	IpFilter:ReceiptFilter_IpFilter;
	Name?:AWSStringProperty;

}
export interface ReceiptFilter_IpFilter {
	Policy:AWSStringProperty;
	Cidr:AWSStringProperty;

}
