import { Tag, AWSResource, AWSResourceProperties, AWSStringProperty, AWSStringListProperty } from '../../AWSResource';
import { CloudFormationFunctionResult } from '../../CloudFormationFunctionResult'

export class TransitGateway extends AWSResource<TransitGateway_ResourceProperties> {
	constructor(name:string,properties:TransitGateway_ResourceProperties){
		super(name,properties,"AWS::EC2::TransitGateway");
	}
}

export interface TransitGateway_ResourceProperties extends AWSResourceProperties {
	DefaultRouteTablePropagation?:AWSStringProperty;
	Description?:AWSStringProperty;
	AutoAcceptSharedAttachments?:AWSStringProperty;
	DefaultRouteTableAssociation?:AWSStringProperty;
	VpnEcmpSupport?:AWSStringProperty;
	DnsSupport?:AWSStringProperty;
	AmazonSideAsn?:number;
	Tags?:Tag[];

}
